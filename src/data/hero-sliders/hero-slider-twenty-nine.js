import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://api.luxurymjhomes.com/";

const sliderData = [{ "id": "3030986a-68b1-421d-96e2-560342f90899", "title": "Furniture <br /> Collection <span>2021</span>", "subtitle": "Sale up to <span>40% off</span>", "image": "https://api.luxurymjhomes.com/media/carousel/3030986a-68b1-421d-96e2-560342f90899.webp" }, { "id": "dfe591bf-f6b5-4350-a612-5a1ce7052359", "title": "ABC <br /> Collection <span>2021</span>", "subtitle": "Sale up to <span>40% off</span>", "image": "https://api.luxurymjhomes.com/media/carousel/dfe591bf-f6b5-4350-a612-5a1ce7052359.webp" }]

export default sliderData;