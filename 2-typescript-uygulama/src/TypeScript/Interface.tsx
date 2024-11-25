import React from "react";

function Interface() {
  return <div>Interface</div>;
}

export default Interface;
//interface sözde öğesi, tip objeleri oluşturmanın başka bir yoludur.

interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point): void {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

interface Teams {
  turkey: "fenerbahce" | "galatasaray";
  spain: "barcelona" | "real-madrid";
}

const champions1: Teams = { turkey: "fenerbahce", spain: "barcelona" };

console.log(champions1);

interface Teams {
  turkey: "fenerbahce" | "galatasaray";
  spain: "barcelona" | "real-madrid";
}

const champions: Teams = { turkey: "fenerbahce", spain: "barcelona" };

console.log(champions);

//type ile interface aynı amaçta olsalar bile bazı farkları vardır.

//1 - Fonksiyon tanımlamaları farklıdır.

interface SetPoint1 {
  (x: number, y: number): void;
}

type SetPoint = (x: number, y: number) => void;

//2 - type ile diğer tip atamaları direk type değerine atanabilirken interface e atanamaz.

// primitive
type Name = string;

// object
type PartialPointX10 = { x: number };
type PartialPointY = { y: number };

// union
type PartialPoint10 = PartialPointX10 | PartialPointY;

// tuple
type Data = [number, string];

//3 - Extend edilme şekilleri farklıdır. Ayrıca ikisi birbirinden extend edilebilir.

//-Interface extends interface
interface PartialPointX {
  x: number;
}
interface Point extends PartialPointX {
  y: number;
}
// -Type extends type
type PartialPointX1 = { x: number };
type Point1 = PartialPointX1 & { y: number };

//-Interface extends type
type PartialPointX2 = { x: number };
interface Point extends PartialPointX {
  y: number;
}

//-Type extends interface

type PartialPointX3 = { x: number };
interface Point3 extends PartialPointX3 {
  y: number;
}

//3 - interface aynı isimde birden çok tanımlanabilir fakat type tanımlanamaz.

interface Point4 {
  x: number;
}
interface Point4 {
  y: number;
}

const point4: Point4 = { x: 1, y: 2 };
