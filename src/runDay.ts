import readline from 'readline';
import { execSync } from 'child_process';

const day = process.argv[2]

execSync(`node dist/day-${day}/Day${day}.js`, { encoding: 'utf-8', stdio: 'inherit' });