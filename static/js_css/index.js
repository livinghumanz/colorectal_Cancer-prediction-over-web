

var a=0;
var im_list=['test2.jpeg', 'test_l2.jpeg', 'test_m1.jpeg', 'test_a1.jpeg', 'test_s4.jpeg', 'test_l3.jpeg', 'test7.jpeg', 
                'test6.jpeg', 'test_c4.jpeg', 'test5.jpeg', 'test3.jpeg', 'test_m2.jpeg', 'test_l1.jpeg', 'test_c5.jpeg',
                'test_s1.jpeg', 'test9.jpeg', 'test4.jpeg', 'test_c2.jpeg', 'test_d3.jpeg', 'test_d2.jpeg', 'test_d5.jpeg', 
                'test_m3.jpeg', 'test_s2.jpeg', 'test_m4.jpeg', 'test_c1.jpeg', 'test_c3.jpeg', 'test_m5.jpeg', 'test8.jpeg', 
                'test_d4.jpeg', 'test_s5.jpeg', 'test_s3.jpeg', 'test_a3.jpeg', 'test_a4.jpeg', 'test1.jpeg', 'test_a2.jpeg', 
                'test_a0.jpeg', 'test_l5.jpeg', 'test_l4.jpeg', 'test_d1.jpeg'];
function preview_file(image_file,image){
    
    var file=im_list[a++%30];
    document.getElementById(image).src="/static/test_images/"+file;
    document.getElementById(image_file).value="/static/test_images/"+file;
    document.getElementById("p1").style.display="none";

}
function checkImage(i_id) {
    var v=document.getElementById(i_id).src.split(".");
    if(v[v.length-1]=="jpeg")
        return true;    
    document.getElementById("p1").style.display="block";
    return false    
}
function showdiv(ids) {
    document.getElementById(ids).style.display='block';
    
}
