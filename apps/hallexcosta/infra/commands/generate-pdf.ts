import {GeneratePdfProvider} from '../providers/generate-pdf.provider';
import puppeteer from 'puppeteer';

const username = 'hallexcosta'
const outputFilename = 'curriculo-hallexcosta2'
const provider = new GeneratePdfProvider(puppeteer)
provider.generate(username, outputFilename)
