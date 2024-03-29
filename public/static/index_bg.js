// todo 1.坐标轴  2.拖动视角 3.极限80*80 = 6400个点


var size = 9, res = 10, sizeres = size * res, halfsizeres = sizeres / 2;
var buffer1 = [], buffer2 = [], temp;
var grid = [], plane;
var scene, camera, light, renderer;
var geometry, material;
var mouse, projector, ray, intersects = [];
var stats;

init();
animate();

function init() {
    var container = $('#bg_three');
    container.append(container);
    stats = new Stats();
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.top = '0px';
    for (var i = 0, l = res * res; i < l; i++) {
        buffer1[i] = 0;
        buffer2[i] = 0;
    }

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.x = 40 + sizeres;
    camera.position.y = 150;
    camera.position.z = 120 + sizeres;
    camera.lookAt(new THREE.Vector3(halfsizeres, -40, halfsizeres));
    scene.add(camera);

    scene.add(new THREE.AmbientLight(0xd94d51));

    light = new THREE.SpotLight(0xffffff, 1.25);
    light.position.set(-500, 900, 300);
    light.target.position.set(halfsizeres, 0, halfsizeres);
    light.castShadow = true;
    scene.add(light);

    geometry = new THREE.CubeGeometry(size, size, size);
    geometry.applyMatrix(new THREE.Matrix4().setTranslation(0, size / 2, 0));


    function getColor(){
        var colorValue="0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
        var colorArray = colorValue.split(",");
        var color="0x";//定义一个存放十六进制颜色值的字符串变量，先将#存放进去
        //使用for循环语句生成剩余的六位十六进制值
        for(var i=0;i<6;i++){
            //colorArray[Math.floor(Math.random()*16)]随机取出
            // 由16个元素组成的colorArray的某一个值，然后将其加在color中，
            //字符串相加后，得出的仍是字符串
            color+=colorArray[Math.floor(Math.random()*16)];
        }
        return color;
    }

    for (var i = 0, l = res * res; i < l; i++) {
        // material = new THREE.MeshLambertMaterial({color: 0xd94d51});
        material = new THREE.MeshLambertMaterial({color: getColor()});
        cube = new THREE.Mesh(geometry, material);
        cube.position.x = size + ((i % res) * 10);
        cube.position.z = size + (Math.floor(i / res) * 10);
        cube.scale.y = Math.random() * 5;
        cube.castShadow = true;
        cube.receiveShadow = true;

        // text


        scene.add(cube);
        grid.push(cube);
    }

    geometry = new THREE.PlaneGeometry(sizeres, sizeres);
    plane = new THREE.Mesh(geometry, material);
    plane.position.x = halfsizeres;
    plane.position.z = halfsizeres;
    plane.rotation.x = -90 * Math.PI / 180;
    plane.visible = false;
    scene.add(plane);
    renderer = new THREE.WebGLRenderer();

    renderer.shadowMapEnabled = true;
    renderer.shadowMapSoft = true;

    renderer.shadowCameraNear = 3;
    renderer.shadowCameraFar = camera.far;
    renderer.shadowCameraFov = 50;

    renderer.shadowMapBias = 0.0039;
    renderer.shadowMapDarkness = 0.5;
    renderer.shadowMapWidth = 512;
    renderer.shadowMapHeight = 512;

    var devicePixelRatio = window.devicePixelRatio || 1;

    renderer.setSize(window.innerWidth * devicePixelRatio, window.innerHeight * devicePixelRatio);
    renderer.domElement.style.width = window.innerWidth + 'px';
    renderer.domElement.style.height = window.innerHeight + 'px';

    container.append(renderer.domElement);

    mouse = new THREE.Vector3(0, 0, 1);
    projector = new THREE.Projector();
    ray = new THREE.Ray(camera.position);

    document.addEventListener('mousemove', onDocumentMouseMove, false);
    document.addEventListener( 'mousedown', onMouseDown, false );
    document.addEventListener( 'mouseup', onMouseup, false );
}

var rotateStart;
rotateStart = new THREE.Vector2();

/*
    鼠标移动控制模型旋转思想：
    当按下鼠标时及时当前鼠标的水平坐标clientX1，在鼠标移动的过程中不断触发onMouseMove事件，
    不停的记录鼠标的当前坐标clientX2，由当前坐标减去记录的上一个水平坐标，
    并且将当前的坐标付给上一个坐标clientX1，计算两个坐标的之间的差clientX2-clientX1，
    将得到的差值除以一个常量（这个常量可以根据自己的需要调整），得到旋转的角度
*/
function onMouseDown(event){
    event.preventDefault();
    mouseDown = true;
    mouseX = event.clientX;//出发事件时的鼠标指针的水平坐标
    rotateStart.set( event.clientX, event.clientY );
    document.addEventListener( 'mousemove', onMouseMove2, false );
}

function onMouseup(event){
    mouseDown = false;
    document.removeEventListener("mousemove", onMouseMove2);
}

function onMouseMove2(event){
    if(!mouseDown){
        return;
    }
    var deltaX = event.clientX - mouseX;
    mouseX = event.clientX;
    rotateScene(deltaX);
}

//设置模型旋转速度，可以根据自己的需要调整
function rotateScene(deltaX){
    //设置旋转方向和移动方向相反，所以加了个负号
    var deg = -deltaX/279;
    //deg 设置模型旋转的弧度
    scene.rotation.y += 130;
    render();
}

function onDocumentMouseMove(event) {

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    ray.direction = projector.unprojectVector(mouse.clone(), camera);
    ray.direction.subSelf(camera.position).normalize();

    intersects = ray.intersectObject(plane);

}

function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();

}

// 加载文字
function loadTextFamily() {
    var textLoader = new THREE.FontLoader()
    textLoader.load(
        'PingFang_SC_Regular_Regular.json',
        function (font) {
            fontFamily = font;
            var t = 0;
            for (var i = 0; i <= buildFloor; i++) {
                t = i + 1;
                createText(t + '层', [500, 400 * (i), 600]);
            }
        }
    );
}
function createText(text, pos) {
    var options = {
        size: 80,
        height: 0,
        font: fontFamily, // “引用js字体必须换成英文”
        bevelThickness: 1,
        bevelSize: 1,
        bevelSegments: 1,
        curveSegments: 50,
        steps: 1
    }
    var textGeo = new THREE.TextGeometry(text, options);
    var textMesh = new THREE.Mesh(textGeo, new THREE.MeshBasicMaterial())
    textMesh.position.set(pos[0], pos[1], pos[2]);
    scene.add(textMesh);
}
loadTextFamily();

function render() {
    if (intersects.length) {
        var point = intersects[0].point;
        var x = Math.floor(point.x / size);
        var y = Math.floor(point.z / size);

        buffer1[x + y * res] = 10;

    }

    var bottom = res * res - res;

    // update buffers
    for (var i = 0, l = res * res; i < l; i++) {

        var x1, x2, y1, y2;

        if (i % res == 0) {

            // left edge

            x1 = 0;
            x2 = buffer1[i + 1];

        } else if (i % res == res - 1) {

            // right edge

            x1 = buffer1[i - 1];
            x2 = 0;

        } else {

            x1 = buffer1[i - 1];
            x2 = buffer1[i + 1];

        }

        if (i < res) {

            // top edge

            y1 = 0;
            y2 = buffer1[i + res];

        } else if (i > l - res - 1) {

            // bottom edge

            y1 = buffer1[i - res];
            y2 = 0;

        } else {

            y1 = buffer1[i - res];
            y2 = buffer1[i + res];

        }

        buffer2[i] = (x1 + x2 + y1 + y2) / 1.9 - buffer2[i];
        buffer2[i] -= buffer2[i] / 10;

    }

    temp = buffer1;
    buffer1 = buffer2;
    buffer2 = temp;

    // update grid

    for (var i = 0, l = res * res; i < l; i++) {

        grid[i].scale.y += (Math.max(0.1, 0.1 + buffer2[i]) - grid[i].scale.y) * 0.1;

    }

    renderer.render(scene, camera);

}
