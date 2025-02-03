import puppeteer, {Puppeteer} from 'puppeteer'
import * as fs from 'fs-extra'
import {loadEnvConfig} from '@next/env'
loadEnvConfig(process.cwd())

// aux func to type generic data
function asType<GenericType>(data: unknown): GenericType {
  return data as GenericType
}

export class GeneratePdfProvider {
  private readonly baseUrl: string;

  constructor(puppeteer: Puppeteer) {
    this.baseUrl =  asType<string>(process.env.BASE_URL)
  }  
  
  async generate(username: string, outputFilename: string)  {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    console.log(`${this.baseUrl}/cv/${username}`)
    await page.goto(`${this.baseUrl}/cv/${username}`, { waitUntil: 'networkidle0' })
    const pdf = await page.pdf({ format: 'A4' });
    const filePath = `./public/assets/pdf/${outputFilename}.pdf`
    await fs.outputFile(filePath, pdf)
    await browser.close();
  }
}