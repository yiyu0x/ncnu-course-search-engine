$(document).ready(function(e){
    $.getJSON( "./feed.json" , function(result){
        // console.log(result);
        new Vue({
            el: '#header',
            data: {
                location_list:  result['location'],
                faculty_list:  result['faculty'] ,
                department_list:  result['department'] ,
                time_list:  result['time'],
                courseID_list:  result['course_id'],
                teacher_list:  result['teacher']
            }
        });

        $("#teacher").autocomplete({
            source: result['teacher']
        });

        $("#classtime").autocomplete({
            source: result['time']
        });
        
        $("#course_id").autocomplete({
            source: result['course_id']
        });
    });
});