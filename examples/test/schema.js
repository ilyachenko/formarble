window.schema = {
   "title": "Profile config",
   "display": {
      "name": "fmTree",
      "tree": [
         "image"
      ]
   },
   "mapping": {
      "image.webp": "image.formats.webp",
      "image.png": "image.formats.png",
      "image.progressive": "image.formats.jpg.progressive",
      "image.injected.injected3": "image.injected.children.injected3"
   },
   "virtual": {
      "image.formats.jpg.quality": "image.quality",
      "image.formats.webp.quality": "image.quality"
   },
   "properties": {
      "image": {
         "title": "Image settings",
         "display": {
            "name": "fmTree",
            "tree": [
               "formats",
               "scale",
               "crop"
            ]
         },
         "_id": "image",
         "_path": "image",
         "path": "image",
         "properties": {
            "injected": {
               "_id": "injected",
               "_path": "image.injected",
               "path": "image.injected",
               "properties": {
                  "injected1": {
                     "type": "string",
                     "_id": "injected1",
                     "_path": "image.injected.injected1",
                     "path": "image.injected.injected1",
                     "display": {
                        "name": "fm-input",
                        "type": "text"
                     },
                     "title": "Injected 1",
                     "_order": 1003,
                     "level": 3
                  },
                  "injected2": {
                     "type": "string",
                     "_id": "injected2",
                     "_path": "image.injected.injected2",
                     "path": "image.injected.injected2",
                     "display": {
                        "name": "fm-input",
                        "type": "text"
                     },
                     "title": "Injected 2",
                     "_order": 1004,
                     "level": 3
                  },
                  "children": {
                     "properties": {
                        "injected3": {
                           "type": "string",
                           "_id": "injected3",
                           "_path": "image.injected.injected3",
                           "path": "image.injected.children.injected3",
                           "display": {
                              "name": "fm-input",
                              "type": "text"
                           },
                           "title": "Injected 3",
                           "_order": 1006,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "fm-input-group"
                     },
                     "title": "Children",
                     "_order": 1005,
                     "level": 3
                  }
               },
               "display": {
                  "name": "fm-input-group"
               },
               "title": "Injected",
               "_order": 1002,
               "level": 2
            },
            "formats": {
               "title": "Formats",
               "_id": "formats",
               "_path": "image.formats",
               "path": "image.formats",
               "properties": {
                  "jpg": {
                     "title": "JPEG options",
                     "_id": "jpg",
                     "_path": "image.formats.jpg",
                     "path": "image.formats.jpg",
                     "properties": {
                        "progressive": {
                           "type": "boolean",
                           "description": "Create progressive image",
                           "_id": "progressive",
                           "_path": "image.progressive",
                           "path": "image.formats.jpg.progressive",
                           "display": {
                              "name": "fm-checkbox"
                           },
                           "title": "Progressive",
                           "_order": 1009,
                           "level": 4
                        },
                        "quality": {
                           "type": "number",
                           "minimum": 0,
                           "maximum": 100,
                           "display": {
                              "name": "fm-input-range",
                              "type": "number",
                              "max": 100,
                              "min": 0
                           },
                           "_id": "quality",
                           "_path": "image.quality",
                           "__virtual": true,
                           "path": "image.formats.jpg.quality",
                           "title": "Quality",
                           "_order": 1010,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "fm-input-group"
                     },
                     "_order": 1008,
                     "level": 3
                  },
                  "png": {
                     "title": "PNG options",
                     "_id": "png",
                     "_path": "image.png",
                     "path": "image.formats.png",
                     "properties": {
                        "compression": {
                           "type": "number",
                           "description": "PNG compression",
                           "minimum": 0,
                           "maximum": 9,
                           "_id": "compression",
                           "_path": "image.png.compression",
                           "path": "image.formats.png.compression",
                           "display": {
                              "name": "fm-input",
                              "type": "number",
                              "max": 9,
                              "min": 0
                           },
                           "title": "Compression",
                           "_order": 1012,
                           "level": 4
                        },
                        "filtering": {
                           "type": "string",
                           "enum": [
                              "none",
                              "sub",
                              "up",
                              "average",
                              "paeth",
                              "adaptive"
                           ],
                           "_id": "filtering",
                           "_path": "image.png.filtering",
                           "path": "image.formats.png.filtering",
                           "display": {
                              "name": "fm-select",
                              "options": [
                                 {
                                    "id": "none",
                                    "title": "None"
                                 },
                                 {
                                    "id": "sub",
                                    "title": "Sub"
                                 },
                                 {
                                    "id": "up",
                                    "title": "Up"
                                 },
                                 {
                                    "id": "average",
                                    "title": "Average"
                                 },
                                 {
                                    "id": "paeth",
                                    "title": "Paeth"
                                 },
                                 {
                                    "id": "adaptive",
                                    "title": "Adaptive"
                                 }
                              ]
                           },
                           "title": "Filtering",
                           "_order": 1013,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "fm-input-group"
                     },
                     "_order": 1011,
                     "level": 3
                  },
                  "webp": {
                     "title": "WebP options",
                     "_id": "webp",
                     "_path": "image.webp",
                     "path": "image.formats.webp",
                     "properties": {
                        "fallback": {
                           "type": "string",
                           "enum": [
                              "png",
                              "jpg"
                           ],
                           "display": {
                              "name": "fm-radio-list",
                              "options": [
                                 {
                                    "id": "png",
                                    "title": "PNG"
                                 },
                                 {
                                    "id": "jpg",
                                    "title": "JPEG"
                                 }
                              ],
                              "labels": {
                                 "png": "PNG",
                                 "jpg": "JPEG"
                              }
                           },
                           "_id": "fallback",
                           "_path": "image.webp.fallback",
                           "path": "image.formats.webp.fallback",
                           "title": "Fallback",
                           "_order": 1015,
                           "level": 4
                        },
                        "quality": {
                           "type": "number",
                           "minimum": 0,
                           "maximum": 100,
                           "display": {
                              "name": "fm-input-range",
                              "type": "number",
                              "max": 100,
                              "min": 0
                           },
                           "_id": "quality",
                           "_path": "image.quality",
                           "__virtual": true,
                           "path": "image.formats.webp.quality",
                           "title": "Quality",
                           "_order": 1016,
                           "level": 4
                        }
                     },
                     "display": {
                        "name": "fm-input-group"
                     },
                     "_order": 1014,
                     "level": 3
                  }
               },
               "display": {
                  "name": "fm-input-group"
               },
               "_order": 1007,
               "level": 2
            },
            "profile": {
               "type": "string",
               "_id": "profile",
               "_path": "image.profile",
               "path": "image.profile",
               "display": {
                  "name": "fm-input",
                  "type": "text"
               },
               "title": "Profile",
               "_order": 1017,
               "level": 2
            },
            "format": {
               "type": "string",
               "enum": [
                  "png",
                  "jpg",
                  "webp"
               ],
               "display": {
                  "name": "fm-radio-list",
                  "options": [
                     {
                        "id": "png",
                        "title": "PNG"
                     },
                     {
                        "id": "jpg",
                        "title": "JPEG"
                     },
                     {
                        "id": "webp",
                        "title": "WebP"
                     }
                  ],
                  "labels": {
                     "png": "PNG",
                     "jpg": "JPEG",
                     "webp": "WebP"
                  }
               },
               "_id": "format",
               "_path": "image.format",
               "path": "image.format",
               "title": "Format",
               "_order": 1018,
               "level": 2
            },
            "quality": {
               "type": "number",
               "minimum": 0,
               "maximum": 100,
               "display": {
                  "name": "fm-input-range",
                  "type": "number",
                  "max": 100,
                  "min": 0
               },
               "_id": "quality",
               "_path": "image.quality",
               "path": "image.quality",
               "title": "Quality",
               "_order": 1019,
               "level": 2
            },
            "scale": {
               "description": "Scale the image to specified width and height",
               "_id": "scale",
               "_path": "image.scale",
               "path": "image.scale",
               "properties": {
                  "width": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Width",
                     "_id": "width",
                     "_path": "image.scale.width",
                     "path": "image.scale.width",
                     "display": {
                        "name": "fm-input",
                        "type": "number",
                        "min": 0
                     },
                     "title": "Width",
                     "_order": 1021,
                     "level": 3
                  },
                  "height": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Height",
                     "_id": "height",
                     "_path": "image.scale.height",
                     "path": "image.scale.height",
                     "display": {
                        "name": "fm-input",
                        "type": "number",
                        "min": 0
                     },
                     "title": "Height",
                     "_order": 1022,
                     "level": 3
                  },
                  "option": {
                     "type": "string",
                     "enum": [
                        "fit",
                        "fill",
                        "ignore",
                        "noup"
                     ],
                     "_id": "option",
                     "_path": "image.scale.option",
                     "path": "image.scale.option",
                     "display": {
                        "name": "fm-select",
                        "options": [
                           {
                              "id": "fit",
                              "title": "Fit"
                           },
                           {
                              "id": "fill",
                              "title": "Fill"
                           },
                           {
                              "id": "ignore",
                              "title": "Ignore"
                           },
                           {
                              "id": "noup",
                              "title": "Noup"
                           }
                        ]
                     },
                     "title": "Option",
                     "_order": 1023,
                     "level": 3
                  }
               },
               "display": {
                  "name": "fm-input-group"
               },
               "title": "Scale",
               "_order": 1020,
               "level": 2
            },
            "crop": {
               "description": "Crop the image",
               "_id": "crop",
               "_path": "image.crop",
               "path": "image.crop",
               "properties": {
                  "width": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Width",
                     "_id": "width",
                     "_path": "image.crop.width",
                     "path": "image.crop.width",
                     "display": {
                        "name": "fm-input",
                        "type": "number",
                        "min": 0
                     },
                     "title": "Width",
                     "_order": 1025,
                     "level": 3
                  },
                  "height": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Height",
                     "_id": "height",
                     "_path": "image.crop.height",
                     "path": "image.crop.height",
                     "display": {
                        "name": "fm-input",
                        "type": "number",
                        "min": 0
                     },
                     "title": "Height",
                     "_order": 1026,
                     "level": 3
                  },
                  "x": {
                     "type": "number",
                     "minimum": 0,
                     "description": "X offset",
                     "_id": "x",
                     "_path": "image.crop.x",
                     "path": "image.crop.x",
                     "display": {
                        "name": "fm-input",
                        "type": "number",
                        "min": 0
                     },
                     "title": "X",
                     "_order": 1027,
                     "level": 3
                  },
                  "y": {
                     "type": "number",
                     "minimum": 0,
                     "description": "Y offset",
                     "_id": "y",
                     "_path": "image.crop.y",
                     "path": "image.crop.y",
                     "display": {
                        "name": "fm-input",
                        "type": "number",
                        "min": 0
                     },
                     "title": "Y",
                     "_order": 1028,
                     "level": 3
                  }
               },
               "display": {
                  "name": "fm-input-group"
               },
               "title": "Crop",
               "_order": 1024,
               "level": 2
            }
         },
         "_order": 1001,
         "level": 1
      }
   },
   "_order": 1000,
   "level": 0
}
