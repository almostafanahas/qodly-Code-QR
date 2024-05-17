# Overview

Convert a string of characters or a URL (Uniform Resource Locator) to a two-dimensional barcode by using the **QR Code** (Quick Response Code) for Qodly Studio. This component consists of modules appearing in a square. It allows the user to do a quick decoding via a barcode reader, smartphone, etc.

## Qodly-Code-QR

![image](https://github.com/almostafanahas/qodly-Code-QR/assets/66624970/9f685832-661a-4604-b656-7033fde968dc)

## Properties

|   Name   |   Attribute   |   Type   |   Default   |   Description   |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|   Default Link   |   `value`   |   string   |   -   |   A string of characters or a URL as a default value   |
|   QR Size   |   `Qrsize`   |   number   |   128   |   A proportional size of the QR Code   |
|   Level   |   `level`   |   string   |   L   |   QR Code is known for its robustness in the physical world. This is due to something called "Error Correction". It's a feature specific to the QR Code which ensures that it is scannable, even if there has been some form of physical damage to the code. There are four levels of error correction to choose from, depending on the damage that the user expects from the QR Code to sustain: **L** (7% of data can be restored), **M** (15% of data can be restored), **Q** (25% of data can be restored) and **H** (30% of data can be restored)   |
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

## Image Settings

There is an optional property to add an image in the middle of the QR Code. It is an object called `imageSettings` to represent the settings of the image, these are the properties for the object `imageSettings` (except `x` and `y` that are undefined, we supposed that the image is centered vertically and horizontally):
|   Name   |   Attribute   |   Type   |   Default   |   Description   |
| ------------- | ------------- | ------------- | ------------- | ------------- |
|   Image Source   |   `src`   |   string   |   -   |   The link of the image to be displayed in the middle of the QR Code   |
|   Height   |   `height`   |   number   |   20   |   The height of the image   |
|   Width   |   `width`   |   number   |   20   |   The width of the image   |
|   Excavate   |   `excavate`   |   boolean   |   false   |  If the value of this attribute is true, it digs the foreground of the image to nearest whole module, it shows a padding all around the image  |

The example below is a QR Code for the website of Qodly, and in the middle we can see the logo of Qodly displayed with a padding in its perimeter (because the value of `excavate` is true):

![image](https://github.com/almostafanahas/qodly-Code-QR/assets/66624970/72ec31ae-886c-424f-bef2-847a03f50854)
