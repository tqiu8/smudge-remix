var x_random = Math.random()
var y_random = Math.random()

var headMovement = headDisturbance(x_random, y_random)
var neckMovement = createMovement(headMovement, [-50, 200], [-20, 150])
var chestMovement = createMovement(neckMovement, [-120, 100], [-50, 130])
var rightForeMovement = createMovement(chestMovement, [10, 150], [-70, 180])
var leftForeMovement = createMovement(chestMovement, [-20, 30], [-50, 180])
var bodyMovement = createMovement(chestMovement, [-150, 300], [0, 150])
var haunchesMovement = createMovement(bodyMovement, [-170, 230], [-10, 10])
var rightBackMovement = createMovement(haunchesMovement, [-100, 50], [-20, 200])
var leftBackMovement = createMovement(haunchesMovement, [-100, 50], [-20, 200])
var tailMovement = createMovement(haunchesMovement, [-50, 50], [-50, 50])

console.log(neckMovement)

var tailPath = createTail();
var rightHindPath = createHind('right');
var leftHindPath = createHind('left');
var haunchesPath = createHaunches();
var bodyPath = createBody();
var chestPath = createChest();
var rightForelegPath = createRightFore();
var leftForelegPath = createLeftFore();
var neckPath = createNeck();


//head 
var path = createHead() 
var earPath = createEar();
var nosePath = createNose();
var meatballPath = createMeatball();
var rightEyePath = createEye('right');
var rightIrisPath = createIris('right');
var leftEyePath = createEye('left');
var leftIrisPath = createIris('left');

var head = [path, earPath, nosePath, meatballPath, rightEyePath,
    leftEyePath, rightIrisPath, leftIrisPath]
    
addDisturbance(head, headMovement)
neckPath.position += neckMovement
chestPath.position += chestMovement
rightForelegPath.position += rightForeMovement
leftForelegPath.position += leftForeMovement
bodyPath.position += bodyMovement
haunchesPath.position += haunchesMovement 
rightHindPath.position += rightBackMovement
leftHindPath.position += leftBackMovement
tailPath.position += tailMovement

//earPath = disturbPath(earPath)
//nosePath = disturbPath(nosePath, 40)
// neckPath = disturbPath(neckPath, 70)
// chestPath = disturbPath(chestPath, 70)
// rightForelegPath = disturbPath(rightForelegPath, 30)
// leftForelegPath = disturbPath(leftForelegPath, 30)
// bodyPath = disturbPath(bodyPath, 100)
// haunchesPath = disturbPath(haunchesPath, 100)
// rightHindPath = disturbPath(rightHindPath, 30)


function onFrame(event){
    chestPath = wiggle(chestPath, event, 3, -10)
    neckPath = wiggle(neckPath, event, 2, 10)
    bodyPath = wiggle(bodyPath, event, 1, -20)
    earPath = wiggle(earPath, event, 2, 9)
    haunchePath = wiggle(haunchesPath, event, 1, 20)
    leftEyePath = wiggle(leftEyePath, event, 4, 20)
    rightEyePath = wiggle(rightEyePath, event, 5, 20)
    //leftIrisPath = wiggle(leftIrisPath, event, 8, 200)
    //rightIrisPath = wiggle(rightIrisPath, event, 8, 200)
    path = wiggle(path, event, 1, 10)
    rightForelegPath = wiggle(rightForelegPath, event, 4, 10)
    leftForelegPath = wiggle(leftForelegPath, event, 4, 10)
    rightHindPath = wiggle(rightHindPath, event, 4, 20)
    leftHindPath = wiggle(leftHindPath, event, 4, 15)
    tailPath = wiggle(tailPath, event,1, 4)
    meatballPath = wiggle(meatballPath, event, 4, 200)
}


function wiggle(path, event, time, amount) {
    var segments = path.segments
    for (var i = 0; i < segments.length; i++) {
        var segment = segments[i];
        // A cylic value between -1 and 1
        var sinus = Math.sin(event.time * time + i);
        var cosine = Math.cos(event.time * time + i)
        
        // Change the y position of the segment point:
        //segment.point.y += sinus * amount;
        segment.point.y += sinus * cosine;
        segment.point.x -= sinus * cosine;
    }
    // Uncomment the following line and run the script again
    // to smooth the path:
    path.smooth();
    return path
}

function disturbPath(path, range) {
    segments = path.segments
    for (var i =0; i<segments.length; i++) {
        seg = segments[i]
        seg.point = createMovement(seg.point, [-range, range], [-range, range])
        handleDisturb = [Math.random() * -range]
        //seg.handleIn = createMovement(seg.handleIn, handleDisturb, handleDisturb)
        //seg.handleOut = createMovement(seg.handleOut, handleDisturb, handleDisturb)
    }
    return path
}

function createDisturbance(x_range, y_range) {
    var x_disturbance = x_range[0] + Math.random() * x_range[1]
    var y_disturbance = y_range[0] + Math.random() * y_range[1]
    return [x_disturbance, y_disturbance]
}

function addDisturbance(arr, disturbance) {
    for (var i=0; i<arr.length;i++) {
        arr[i].position += disturbance
    }
}

function createMovement(part, x_range, y_range) {
    var disturbance = createDisturbance(x_range, y_range)
    return new Point(part.x + disturbance[0], part.y + disturbance[1])
}


function headDisturbance(x, y){
    var new_x = 900/4 + (x*900/2)
    var new_y = 530/4 - (y*530/2)
    return new Point(new_x, new_y)
}

function createHead(){
    var path = new Path();
    path.closed = true;
    var pt0 = new Point(375.5645, 289.7599)
    var pt1 = new Point(305.56, 158.3)
    var seg1 = new Segment(pt1, pt1-new Point(295.1297, 172.2969), 
        pt1-new Point(321.5645, 136.8480));
        
    var pt2 = new Point(236.56, 300.09)
    var seg2 = new Segment(pt2, pt2-new Point(208.5645, 356.7599), 
        pt2-new Point(266.3551, 239.8026));
    
    var pt3 = new Point(234.56, 400.76)
    var seg3 = new Segment(pt3, new Point(235.6079, 360.4118)-pt3, 
        new Point(219.5645, 418.7599)-pt3)
        
    var pt4 = new Point(222.5645, 463.7599)
    var seg4 = new Segment(pt4, null, new Point(257.5645, 416.7599)-pt4)
    
    var pt5 = new Point(222.3196, 526.7599)
    var seg5 = new Segment(pt5, null, new Point(196.5645, 530.7599)-pt5)
    
    var pt6 = new Point(281.5645, 627.7599)
    var seg6 = new Segment(pt6, new Point(262.5645, 626.7599)-pt6, 
        new Point(270.5645, 594.7599)-pt6)
        
    var pt7 = new Point(375.5645, 552.7599)
    var seg7 = new Segment(pt7, pt7 - new Point(421.5645, 566.7599), 
        pt7- new Point(329.5645, 538,7599))
        
    var pt8 = new Point(469.5645, 643.7599)
    var seg8 = new Segment(pt8, new Point(451.5645, 549.7599)-pt8,
        new Point(484.5645, 614.7599)-pt8)
        
    var pt9 = new Point(515.5645, 519.7599)
    var seg9 = new Segment(pt9, new Point(545.5645, 577.7599)-pt9,
        new Point(531.5645, 497.7599)-pt9)
        
    var pt10 = new Point(583.5645, 375.7599)
    var seg10 = new Segment(pt10, pt10 - new Point(583.5645, 349.8414), 
        pt10 - new Point(583.5645, 431.7599))
        
    var pt11 = new Point(519.5645, 335.7599)
    var seg11 = new Segment(pt11, pt11 - new Point(483.4809, 317.8378),
        pt11 - new Point(550.6543, 351.2016))
        
    var pt12 = new Point(444.5645, 294.5099)
    var seg12 = new Segment(pt12, pt12-new Point(437.4419, 311.5578),
        pt12 - new Point(448.2514, 285.6851))
        
    var pt13 = new Point(411.5645, 314.7599)
    var seg13 = new Segment(pt13, pt13-new Point(378.5645, 303.7599),
        pt13 - new Point(444.5645, 325.7599))
    
    path.add(pt0, seg1, seg2, seg3, seg4, seg5, seg6, seg7, seg8, seg9, seg10,
        seg11, seg12, seg13)
        
    path.fillColor = '#604b3b'
    return path;
}

function createEar() {
    var path = new Path()
    path.closed = true;
    var pt0 = new Point(440.1764, 317.2197)
    
    var pt1 = new Point(530.8431, 502.5530)
    var seg1 = new Segment(pt1, new Point(524.1764, 471.2197)-pt1,
        new Point(557.5098, 483.2197)-pt1)
        
    var pt2 = new Point(572.8431, 341.8864)
    var seg2 = new Segment(pt2, pt2-new Point(534.8431, 346.5530),
        pt2-new Point(610.8431, 337.2197))
        
    var pt3 = new Point(470.8431, 292.5530)
    var seg3 = new Segment(pt3, pt3-new Point(439.5098, 267.8864),
        pt3 - new Point(502.1764, 317.2197))
    
    path.add(pt0, seg1, seg2, seg3)
    path.fillColor = '#ac8b5f'
    return path
}

function createNose(){
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(402.1778, 331.0265)
    var seg0 = new Segment(pt0, pt0-new Point(378.1778, 323.0265),
        pt0-new Point(426.1778, 339.0265))
        
    var pt1 = new Point(385.1778, 410.6932)
    var seg1 = new Segment(pt1, pt1-new Point(385.1778, 399.3599),
        pt1-new Point(385.1778, 422.0265))
        
    var pt2 = new Point(375.3045, 453.6932)
    var seg2 = new Segment(pt2, pt2-new Point(363.7607, 483.4764), 
        pt2-new Point(385.5111, 427.3599))
        
    var pt3 = new Point(314.6778, 543.5265)
    var seg3 = new Segment(pt3, pt3-new Point(314.8998, 593.6858),
        pt3-new Point(314.4631, 495.0265))
        
    var pt4 = new Point(372.1778, 590.0265)
    var seg4 = new Segment(pt4, null, pt4-new Point(354.8445, 600.0265))
    
    var pt5 = new Point(419.1778, 587.6932)
    var seg5 = new Segment(pt5, new Point(400.1778, 603.6932)-pt5,
        new Point(458.6653, 554.4406)-pt5)
        
    var pt6 = new Point(419.1778, 479.0265)
    var seg6 = new Segment(pt6, pt6-new Point(405.5111, 467.0265),
        pt6 - new Point(432.8445, 491.0265))
        
    var pt7 = new Point(402.1778, 411.0265)
    var seg7 = new Segment(pt7, pt7-new Point(404.8445, 391.6932),
        pt7-new Point(399.5111, 430.3599))
        
    path.add(seg0, seg1, seg2, seg3, seg4, seg5, seg6, seg7)
    path.fillColor = '#f8f9f6'
    return path
}

function createMeatball(){
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(359.3984, 529.7741)
    var seg0 = new Segment(pt0, pt0-new Point(340.8984, 524.7741),
        pt0-new Point(377.8984, 534.7741))
        
    var pt1 = new Point(345.3984, 569.7741)
    var seg1 = new Segment(pt1, pt1-new Point(348.3984, 578.2741),
        pt1-new Point(342.3984, 561.2741))
        
    var pt2 = new Point(373.3984, 589.7945)
    var seg2 = new Segment(pt2, new Point(367.3984, 579.7741)-pt2, null)
    
    var pt3 = new Point(385.8984, 583.7741)
    var seg3 = new Segment(pt3, pt3-new Point(392.3984, 579.7741),
        pt3 - new Point(379.3984, 587.7741))
        
    var pt4 = new Point(405.8852, 572.7741)
    var seg4 = new Segment(pt4, pt4-new Point(414.3720, 562.2741),
        pt4-new Point(397.3984, 583.2741))
    
    var pt5 = new Point(394.3984, 536.7741)
    var seg5 = new Segment(pt5, pt5-new Point(374.3984, 536.7741),
        pt5-new Point(414.3984, 536.7741))
    
    path.add(seg0, seg1, seg2, seg3, seg4, seg5)
    path.fillColor = '#603d39'
    return path
}

function createEye(direction){
    var path = new Path()
    path.closed = true
    if (direction == 'right') {
        var pt0 = new Point(468.9732, 437.3150)
        var seg0 = new Segment(pt0, pt0-new Point(457.6399, 424.6483),
            pt0-new Point(480.3065, 449.9816))
        
        var pt1 = new Point(444.9732, 457.6483)
        var seg1 = new Segment(pt1, new Point(444.9732)-pt1, null)
        
        var pt2 = new Point(461.6399, 467.5740)
        var seg2 = new Segment(pt2, pt2-new Point(467.7108, 467.5573), pt2-new Point(449.4732, 467.6074))
        
        path.add(seg0, seg1, seg2)
    }
    else {
        var pt0 = new Point(333.2404, 439.8676)
        var seg0 = new Segment(pt0, null, new Point(335.7404, 419.3676)-pt0)
        
        var pt1 = new Point(314.7404, 413.8676)
        var seg1 = new Segment(pt1, pt1-new Point(303.2404, 424.8217),
            pt1-new Point(329.9031, 399.4248))
            
        var pt2 = new Point(318.7404, 442.8676)
        var seg2 = new Segment(pt2, pt2-new Point(330.2404, 443.3676), 
            pt2-new Point(307.2404, 442.3676))
            
        path.add(seg0, seg1, seg2)
    }
    path.fillColor = '#150f11'
    return path
}

function createIris(direction){
    var path = new Path()
    path.closed= true
    
    if (direction == 'right') {
        var pt0 = new Point(445.7139, 452.7608)
        var seg0 = new Segment(pt0, pt0-new Point(444.0473, 454.0942),
            pt0-new Point(447.3806, 451.4275))
            
        var pt1 = new Point(445.71, 458.09)
        
        var pt2 = new Point(463.6480, 466.0942)
        var seg2 = new Segment(pt2, pt2-new Point(473.5821, 457.4275),
            pt2-new Point(453.7139, 474.7608))
            
        var pt3 = new Point(462.7139, 447.1431)
        
        var pt4 = new Point(457.0473, 463.4275)
        var seg4 = new Segment(pt4, pt4-new Point(447.0473, 464.4275),
            pt4-new Point(467.0473, 462.4275))
            
            
        path.add(seg0, pt1, seg2, pt3, seg4)
    } 
    else {
        var pt0 = new Point(331.9042, 435.3676)
        var seg0 = new Segment(pt0, new Point(330.1542, 447.8676)-pt0, null)
        
        var pt1 = new Point(318.1542, 437.8676)
        var seg1 = new Segment(pt1, new Point(322.6542, 443.6176)-pt1,
            new Point(313.6542, 432.1176)-pt1)
            
        var pt2 = new Point(329.6542, 422.1176)
        var seg2 = new Segment(pt2, new Point(313.9042, 420.2222)-pt2, null)
        
        var pt3 = new Point(310.4042, 432.6176)
        var seg3 = new Segment(pt3,
            new Point(313.4042, 413.6176)-pt3, new Point(308.2598, 446.1992)-pt3)
        
        path.add(seg0, seg1, seg2, seg3)
    }
    
    path.fillColor = '#ba8f2e'
    return path
}

function createNeck(){
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(388.8282, 448.7371)
    
    var pt1 = new Point(224.8282, 530.5720)
    var seg1 = new Segment(pt1, pt1-new Point(192.8282, 646.5720), 
        pt1-new Point(256.8282, 414.5720))
        
    var pt2 = new Point(369.8282, 721.5720)
    var seg2 = new Segment(pt2, pt2-new Point(451.8282, 704.5720),
        pt2-new Point(287.8282, 738.5720))
        
    var pt3 = new Point(533.8282, 566.5720)
    var seg3 = new Segment(pt3, pt3-new Point(544.8282, 452.5720), 
        pt3-new Point(522.8282, 680.5720))
    
    path.add(pt0, seg1, seg2, seg3)
    path.fillColor = '#e1d3bf'
    return path
}

function createChest() {
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(390.2815, 635.2056)
    var seg0 = new Segment(pt0, null, new Point(326.2815, 637.2056)-pt0)
    
    var pt1 = new Point(256.9843, 628.5896)
    var seg1 = new Segment(pt1, new Point(273.7761, 580.2674)-pt1,
        new Point(213.9843, 752.3322)-pt1)
        
    var pt2 = new Point(366.5473, 872.3262)
    var seg2 = new Segment(pt2, new Point(371.5473, 841.3262)-pt2, null)
    
    var pt3 = new Point(532.7104, 670.9230)
    var seg3 = new Segment(pt3, new Point(566.1055, 824.3286)-pt3,
        new Point(517.3938, 600.5639)-pt3)
    
    path.add(seg0, seg1, seg2, seg3)
    
    path.fillColor = '#bab0a2'
    return path
}

function createBody(){
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(236.6474, 597.8978)
    var seg0 = new Segment(pt0, pt0-new Point(284.6450, 455.4681), pt0-new Point(188.6498, 740.3274)
        )
        
    var pt1 = new Point(554.7260, 572.6938)
    var seg1 = new Segment(pt1, new Point(512.7281, 494.6977)-pt1, new Point(596.7239, 650.6899)-pt1)
        
    var pt2 = new Point(524.8307, 787.7550)
    var seg2 = new Segment(pt2, pt2-new Point(464.8337, 817.7535), pt2-new Point(584.8277, 757.7565)
        )
        
    var pt3 = new Point(394.1395, 819.9499)
    var seg3 = new Segment(pt3, null, new Point(335.6424, 818.4500)-pt3)
    
    path.add(seg0, seg1, seg2, seg3)
    path.fillColor = '#604b3b'
    return path
}

function createRightFore(){
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(430.2492, 721.2477)
    var seg0 = new Segment(pt0, null, new Point(421.8540, 772.2452)-pt0)
    
    var pt1 = new Point(420.3541, 930.4432)
    var seg1 = new Segment(pt1, pt1-new Point(402.3550, 968.7353),
        pt1-new Point(438.3532, 892.1510))
        
    var pt2 = new Point(444.2624, 967.2354)
    var seg2 = new Segment(pt2, null, new Point(462.3520, 973.2351)-pt2)
    
    var pt3 = new Point(468.3517, 890.7392)
    var seg3 = new Segment(pt3, pt3-new Point(460.8521, 844.2416),
        pt3-new Point(475.8513,937.2369))
    
    var pt4 = new Point(454.8524, 721.2477)
    var seg4 = new Segment(pt4, pt4-new Point(460.8521, 707.7484),
        pt4 - new Point(448.8527, 734.7470))
    
    path.add(seg0, seg1, seg2, seg3, seg4)
    path.fillColor = '#bab0a2'
    return path
}

function createLeftFore(){
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(293.5758, 725.7063)
    var seg0 = new Segment(pt0, null, new Point(293.5758, 742.7063)-pt0)
    
    var pt1 = new Point(315.9444, 890.8215)
    var seg1 = new Segment(pt1, new Point(339.5698, 841.3559)-pt1, 
        new Point(311.3429, 900.4560)-pt1
        )
        
    var pt2 = new Point(307.6654, 914.1154)
    var seg2 = new Segment(pt2, new Point(306.7929, 909.5204)-pt2, 
        new Point(309.8267, 925.4978)-pt2
        )
        
    var pt3 = new Point(332.5758, 930.7063)
    var seg3 = new Segment(pt3, new Point(324.7394, 930.7063)-pt3,
        new Point(343.5758, 930.7063)-pt3)
        
    var pt4 = new Point(356.5758, 894.7063)
    var seg4 = new Segment(pt4, new Point(356.5758, 910.7063)-pt4,
        new Point(356.5758, 878.7063)-pt4)
        
    var pt5 = new Point(325.0758, 725.7063)
    
    path.add(seg0, seg1, seg2, seg3, seg4, pt5)
    path.fillColor = '#bab0a2'
    return path
}

function createHaunches() {
    var path = new Path()
    path.closed = true
    
    var pt0 = new Point(511.8886, 631.3367)
    var seg0 = new Segment(pt0, new Point(574.8855, 640.3362)-pt0,
        null)
    
    var pt1 = new Point(374.1418, 653.3120)
    var seg1 = new Segment(pt1, pt1-new Point(290.1460, 674.3110), 
        pt1-new Point(458.1376, 632.3131)
        )
        
    var pt2 = new Point(344.1433, 833.3030)
    var seg2 = new Segment(pt2, pt2-new Point(350.1430, 854.3020),
        pt2-new Point(338.1436, 812.3041))
        
    var pt3 = new Point(579.6315, 854.2266)
    var seg3 = new Segment(pt3, pt3-new Point(691.8796, 740.7063),
        pt3-new Point(445.0681, 990.3149))
        
    path.add(seg0, seg1, seg2, seg3)
    path.fillColor = '#44342a'
    return path

}

function createHind(direction){
    var path = new Path()
    path.closed = true
    
    var pt0; var seg0; var pt1; var seg1;
    var pt2; var seg2; var pt3; var seg3;
    var pt4; var seg4;
    
    pt0 = new Point(532.8795, 804.7021)
    seg0 = new Segment(pt0, null, new Point(529.5462, 820.7021)-pt0)
    
    pt1 = new Point(524.8795, 902.0355)
    seg1 = new Segment(pt1, pt1-new Point(515.5462, 926.0355),
        pt1-new Point(534.3128, 878.0355))
        
    pt2 = new Point(542.9847, 932.5355)
    seg2 = new Segment(pt2, null, new Point(548.4536, 927.3616)-pt2)
    
    pt3 = new Point(561.5462, 895.7021)
    seg3 = new Segment(pt3, pt3-new Point(554.2128, 857.3688),
        pt3-new Point(568.8795, 934.0355))
        
    pt4 = new Point(549.5462, 804.7021)
    seg4 = new Segment(pt4, pt4-new Point(551.5462, 795.3688),
        pt4-new Point(547.5462, 814.0355))
        
    if (direction == 'left') {
        var translation = new Point(150.0201, 38.3384)
        pt0 = pt0 - translation
        seg0 = new Segment(pt0, seg0.handleIn, seg0.handleOut)

        pt1 = pt1 - translation
        seg1 = new Segment(pt1, seg1.handleIn, seg1.handleOut)
            
        pt2 = pt2 - translation
        seg2 = new Segment(pt2, seg2.handleIn, seg2.handleOut)
            
        pt3 = pt3 - translation
        seg3 = new Segment(pt3, seg3.handleIn, seg3.handleOut)
            
        pt4 = pt4 - translation
        seg4 = new Segment(pt4, seg4.handleIn, seg4.handleOut)
        
    }

    path.fillColor = '#8e867c'
    path.add(seg0, seg1, seg2, seg3, seg4)
    return path
}

function createTail(){
    var center = new Point(619.77, 792.88)

    var myCircle = new Path.Circle(center, 25);
    
    myCircle.fillColor = '#ac8b5f'
    return myCircle
}


