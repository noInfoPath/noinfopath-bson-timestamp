# NoInfoPath BSON Timestamp

[![NPM](https://nodei.co/npm/noinfopath-bson-timestamp.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/noinfopath-bson-timestamp/)[![NPM](https://nodei.co/npm-dl/noinfopath-bson-timestamp.png)](https://nodei.co/npm/noinfopath-bson-timestamp/)

This module provide two useful functions for converting a BSON Timestamp object 
to a Unix Epoc timestamp, and back again.  

## Install

```
    npm install noinfopath-bson-timestamp --save
```

## Usage

```
    var unixTimestamp = NoBSONTimestamp.toNumber(timestamp),
	    bsonTimestamp = NoBSONTimestamp.fromNumber(tsn);
```

## Dependecies
This module requires the following dependencies:

```
    npm install mongodb --save
```