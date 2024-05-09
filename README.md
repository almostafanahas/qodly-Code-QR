# Overview

Convert a string of characters or a URL (Uniform Resource Locator) to a two-dimensional barcode by using the QR Code (Quick Response Code) for Qodly Studio. This component consists of modules appearing in a square. It allows the user to do a quick decoding via a barcode reader, smartphone, etc.

## Qodly-Code-QR

![image](https://github.com/almostafanahas/qodly-Code-QR/assets/66624970/a70890bb-bd5b-4bd4-ab32-fd4d7f04cae0)

## Properties

|   Name   |   Attribute   |   Type   |   Default   |   Description   |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|   Default Link   |   `value`   |   string   |   -   |   A string of characters or a URL as a default value   |
|   QR Size   |   `Qrsize`   |   number   |   128   |   A proportional size of the QR Code   |
|   Level   |   `level`   |   string   |   L   |   QR Code is known for its robustness in the physical world. This is due to something called ‘error correction’. It's a feature specific to the QR Code which ensures that it is scannable, even if there has been some form of physical damage to the code. There are four levels of error correction to choose from, depending on the damage that the user expects from the QR Code to sustain: **L** (7% of data can be restored), **M** (15% of data can be restored), **Q** (25% of data can be restored) and **H** (30% of data can be restored)   |
|   Margin   |   `includeMargin`   |   boolean   |   false   |   If "true", it displays a margin inside the square   |

## QR Colors

|   Name   |   Attribute   |   Type   |   Default   |   Description   |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|   Font   |   `QrfgColor`   |   string   |   #000000   |   The color of the modules   |
|   Background   |   `QrbgColor`   |   string   |   #FFFFFF   |   The backgroud color of the QR Code (the square color) |

## DataSource
|   Name   |   Type   |   Required   |   Description   |
| ------------- | ------------- | ------------- | ------------- |
|   datasource   |   string   |   Yes   |   Will contain the string of characters or a URL that will be converted to a QR Code  |
