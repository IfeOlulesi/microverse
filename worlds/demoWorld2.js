// demoWorld2.js
// Copyright 2021 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.MaxAvatars = 6;
    Constants.AvatarNames = [
        "generic/1", "generic/2", "generic/3", "generic/4", "generic/5", "generic/6",
        "alice", "newwhite", "fixmadhatter", "marchhare", "queenofhearts", "cheshirecat"
    ];

    Constants.SystemBehaviorDirectory = "behaviors/croquet";
    Constants.SystemBehaviorModules = [
        "menu.js", "elected.js", "propertySheet.js"
    ];

    Constants.UserBehaviorDirectory = "behaviors/demoWorld";
    Constants.UserBehaviorModules = [
        "lights.js", "gridFloor.js"
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        {
            card: {
                name:"world model",
                type: "3d",
                dataLocation: "./assets/3D/artgallery.glb.zip",
                singleSided: true,
                shadow: true,
                layers: ["walk"],
                translation:[0, -1.7, 0],
                scale:[16,16,16],
                shadow: true,
            }
        },
        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                clearColor: 0xaabbff,
            }
        },
        {
            card: {
                name: "image card",
                translation: [0, -0.75, -10],
                //rotation: [0, Math.PI / 2, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/CroquetLogo_RGB.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xffffff,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },
    ];
}