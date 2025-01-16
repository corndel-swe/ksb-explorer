import fs from 'fs/promises'

/**
 * Constructs a URL object for a given filename located in the src/data directory.
 *
 * @param {string} filename - The name of the file
 * @returns {URL} A URL object pointing to the file in the src/data directory
 */
const getURl = filename => new URL(`../src/data/${filename}`, import.meta.url)

/**
 * Zips two arrays together.
 *
 * @param {Array} A - The first array to zip
 * @param {Array} B - The second array to zip
 * @returns {Array<Array<*,*>>} An array of pairs. The first element of each pair is from A and the second is from B.
 */
const zip = (A, B) => A.map((_, i) => [A[i], B[i]])

/**
 * Reads a CSV file from a given URL and separator and splits it into
 * an array of arrays.
 *
 * @param {URL} url - The URL of the CSV file
 * @param {String} sep - The separator used to split values in the file
 * @returns {Promise<Array<Array<String>>>} A promise that resolves to an
 *         array of arrays, where each inner array is a row in the CSV file
 */
const readCSV = async (url, sep) =>
  (await fs.readFile(url, 'utf-8')).split('\n').map(row => row.split(sep))

/**
 * Converts two arrays into an object, using the first array as keys and the second as values.
 *
 * @param {Array<String>} headers - An array of strings representing the keys.
 * @param {Array<String>} values - An array of strings representing the values.
 * @returns {Object} An object where each key is a string from the headers array and each value is the corresponding string from the values array.
 */
const rowToObj = (headers, values) =>
  zip(headers, values).reduce(
    (obj, [h, v]) => Object.assign(obj, { [h]: v }),
    {}
  )

/**
 * Converts an array of rows into an array of JSON objects.
 *
 * @param {Array<Array<String>>} rows - An array of arrays where the first inner array contains headers and the rest contain data.
 * @returns {Array<Object>} An array of objects where each object represents a row in the CSV, with keys from the headers.
 */
const toJSON = rows => {
  // Extract the first row as headers
  const headers = rows.shift().map(h => h.split(' ').join(''))

  // Map each row to an object using headers as keys
  return rows.map(values => rowToObj(headers, values))
}

async function main() {
  const csv = await readCSV(getURl('ksbs.csv'), '\t')
  const json = toJSON(csv)
  await fs.writeFile(getURl('ksbs.json'), JSON.stringify(json))
}

main()
