# sillypass

[![Build Status](https://travis-ci.org/btoll/sillypass.svg?branch=master)](https://travis-ci.org/btoll/sillypass)
[![Coverage Status](https://coveralls.io/repos/github/btoll/sillypass/badge.svg?branch=master)](https://coveralls.io/github/btoll/sillypass?branch=master)
[![npm](https://img.shields.io/npm/v/sillypass.svg)](https://www.npmjs.com/package/sillypass)

## Installation

`npm i sillypass`

## Examples

Generate a password (defaults to 12 characters):

    sillypass generate

Generate a password (custom length):

    sillypass generate -n 20

## Usage

    Command | Description
    ------------ | -------------
    generate | Generate a password.

    Option | Description
    ------------ | -------------
    -n=NUM | The length of the password (defaults to 12 characters).
    -h, --help | Display help.

## Ports

- [Go][golang]

## License

[GPLv3](COPYING)

## Author

Benjamin Toll

[golang]: https://github.com/btoll/sillypass

