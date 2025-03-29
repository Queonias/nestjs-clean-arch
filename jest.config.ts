import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json'; // Tipo de compilerOptions já vem do arquivo tsconfig

// Garantir que compilerOptions seja tipado corretamente
type CompilerOptions = {
  paths: Record<string, string[]>; // Tipo correto para a propriedade paths
};

const typedCompilerOptions: CompilerOptions =
  compilerOptions as CompilerOptions;

export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleNameMapper: pathsToModuleNameMapper(typedCompilerOptions.paths, {
    prefix: '<rootDir>/',
  }),
  testRegex: '.*\\..*spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};
