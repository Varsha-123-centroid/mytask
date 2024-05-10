	
$('#h_address').on('input', function(){
if($('#pr_status').prop("checked") ==true)
{
 $('#pr_address').val($('#h_address').val())
} 
  });

$('#h_state').on('change', function(){ 
if($('#pr_status').prop("checked") ==true)
{
var val = $('#h_state').val();
$('#pr_state').empty();
$('#pr_state').append($('<option/>', { 
        value: val,
        text : val,
        selected:true
    }));
}

 });
$('#h_district').on('change', function(){
if($('#pr_status').prop("checked") ==true)
{
var val = $('#h_district').val();
$('#pr_district').empty();
$('#pr_district').append($('<option/>', { 
        value: val,
        text : val,
        selected:true
    }));
 
} 
 
  });
$('#h_postoffice').on('change', function(){
if($('#pr_status').prop("checked") ==true)
{

var val = $('#h_postoffice').val();
$('#pr_postoffice').empty();
$('#pr_postoffice').append($('<option/>', { 
        value: val,
        text : val,
        selected:true
    }));
} 
 
 });

		$('#h_country').selectize({
		create: false,
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#h_state').selectize({
		create: false,
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#pr_country').selectize({
		create: false,
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#pr_state').selectize({
		create: false,
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	var mystring="";
		
		
 function change_pr_status()
			 {
			
if($('#pr_status').prop("checked") ==false)
{

  $('#pr_container').show( "slow" );
  $('#pr_district').empty();
  $pr_district[0].selectize.clearOptions();
 
 $('#pr_state').append($('<option/>', { 
        value: "",
        text : "Please Select...",
        selected:true
 }));
   $('#pr_postoffice').empty();
    $pr_postoffice[0].selectize.clearOptions();
   $('#pr_address').val("");
    $('#pr_post').val("");   
}
else
{
 $('#pr_container').slideUp();
 var val = $('#h_state').val();
$('#pr_state').empty();
$('#pr_state').append($('<option/>', { 
        value: val,
        text : val,
        selected:true
 }));
 $('#pr_address').val($('#h_address').val());			
var val = $('#h_district').val();
$('#pr_district').empty();
$('#pr_district').append($('<option/>', { 
        value: val,
        text : val,
        selected:true
    }));			 
var val = $('#h_postoffice').val();
$('#pr_postoffice').empty();
$('#pr_postoffice').append($('<option/>', { 
        value: val,
        text : val,
        selected:true
    }));			
 $('#pr_post').val($('#h_post').val());       
   }
   }
   function change_emp_status()
			 {
			
if($('#emp_status').prop("checked") ==false)
{

  $('#second_emp').slideUp();
  
    
		$('#previous_emp').val("N/A");
		$('#pr_emp_number').val("N/A");
		$('#pr_emp_address').val("N/A");
		$('#pr_emp_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#pr_emp_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#pr_emp_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#pr_emp_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#pr_emp_post').val("N/A");
		$('#pr_emp_salary').val("N/A");
		$('#pr_emp_sal_mod1').val("N/A");
  
  
  
}
else
{
 $('#second_emp').slideDown();
 $('#previous_emp').val("");
		$('#pr_emp_number').val("");
		$('#pr_emp_address').val("");
		$('#pr_emp_country').empty();
		
		$('#pr_emp_state').empty();
		
		
		$('#pr_emp_district').empty();
		
		$('#pr_emp_postoffice').empty();
		$('#pr_emp_post').val("");
		$('#pr_emp_salary').val("");
		$('#pr_emp_sal_mod1').val("");
 
 
 
 
}
			
			 
			
        
   }
   
   function change_edu2_status()
			 {
			
if($('#edu2_status').prop("checked") ==false)
{

  $('#edu2_div').slideUp();
  $('#edu2_scname').val("N/A");
    $('#edu2_address').val("N/A");
  $('#edu2_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#edu2_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu2_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu2_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#edu2_post').val("N/A");
		$('#edu2_course').val("N/A");
		$('#edu2_attf').val("00/0000");
		$('#edu2_attt').val("00/0000");
}
else
{
 $('#edu2_div').slideDown();
 
 $('#edu2_scname').val("");
    $('#edu2_address').val("");
  $('#edu2_country').empty();
		$('#edu2_state').empty();
		
		
		$('#edu2_district').empty();
		
		
		$('#edu2_postoffice').empty();
		$('#edu2_post').val("");
		$('#edu2_course').val("");
		$('#edu2_attf').val("");
		$('#edu2_attt').val("");
}
			
			 
			
        
   }
   function change_edu3_status()
			 {
			
if($('#edu3_status').prop("checked") ==false)
{

   $('#edu3_div').slideUp();
  $('#edu3_scname').val("N/A");
    $('#edu3_address').val("N/A");
  $('#edu3_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#edu3_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu3_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu3_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#edu3_post').val("N/A");
		$('#edu3_course').val("N/A");
		$('#edu3_attf').val("00/0000");
		$('#edu3_attt').val("00/0000");
}
else
{
 $('#edu3_div').slideDown();
 
 $('#edu3_scname').val("");
    $('#edu3_address').val("");
  $('#edu3_country').empty();
		$('#edu3_state').empty();
		
		
		$('#edu3_district').empty();
		
		
		$('#edu3_postoffice').empty();
		$('#edu3_post').val("");
		$('#edu3_course').val("");
		$('#edu3_attf').val("");
		$('#edu3_attt').val("");
}
			
			 
			
        
   }
   function change_edu4_status()
			 {
			
if($('#edu4_status').prop("checked") ==false)
{

 
 $('#edu4_div').slideUp();
  $('#edu4_scname').val("N/A");
    $('#edu4_address').val("N/A");
  $('#edu4_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#edu4_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu4_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu4_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#edu4_post').val("N/A");
		$('#edu4_course').val("N/A");
		$('#edu4_attf').val("00/0000");
		$('#edu4_attt').val("00/0000");
}
else
{
 $('#edu4_div').slideDown();
 
 $('#edu4_scname').val("");
    $('#edu4_address').val("");
  $('#edu4_country').empty();
		$('#edu4_state').empty();
		
		
		$('#edu4_district').empty();
	
		
		$('#edu4_postoffice').empty();
		$('#edu4_post').val("");
		$('#edu4_course').val("");
		$('#edu4_attf').val("");
		$('#edu4_attt').val("");
}
			
			 
			
        
   }
   function change_edu5_status()
			 {
			
if($('#edu5_status').prop("checked") ==false)
{

  
 $('#edu5_div').slideUp();
  $('#edu5_scname').val("N/A");
    $('#edu5_address').val("N/A");
  $('#edu5_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#edu5_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu5_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu5_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#edu5_post').val("N/A");
		$('#edu5_course').val("N/A");
		$('#edu5_attf').val("00/0000");
		$('#edu5_attt').val("00/0000");
}
else
{
 $('#edu5_div').slideDown();
 
 $('#edu5_scname').val("");
    $('#edu5_address').val("");
  $('#edu5_country').empty();
		$('#edu5_state').empty();
		
		
		$('#edu5_district').empty();
		
		
		$('#edu5_postoffice').empty();
		$('#edu5_post').val("");
		$('#edu5_course').val("");
		$('#edu5_attf').val("");
		$('#edu5_attt').val("");
}
			
			 
			
        
   }
   function change_edu6_status()
			 {
			
if($('#edu6_status').prop("checked") ==false)
{

 
 $('#edu6_div').slideUp();
  $('#edu6_scname').val("N/A");
    $('#edu6_address').val("N/A");
  $('#edu6_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#edu6_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu6_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu6_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#edu6_post').val("N/A");
		$('#edu6_course').val("N/A");
		$('#edu6_attf').val("00/0000");
		$('#edu6_attt').val("00/0000");
		
}
else
{
 $('#edu6_div').slideDown();
 
 $('#edu6_scname').val("");
    $('#edu6_address').val("");
  $('#edu6_country').empty();
		$('#edu6_state').empty();
		
		
		$('#edu6_district').empty();
		
		
		$('#edu6_postoffice').empty();
		$('#edu6_post').val("");
		$('#edu6_course').val("");
		$('#edu6_attf').val("");
		$('#edu6_attt').val("");
}
			
			 
			
        
   }
   function change_edu7_status()
			 {
			
if($('#edu7_status').prop("checked") ==false)
{

   $('#edu7_div').slideUp();
  $('#edu7_scname').val("N/A");
    $('#edu7_address').val("N/A");
  $('#edu7_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#edu7_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu7_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#edu7_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#edu7_post').val("N/A");
		$('#edu7_course').val("N/A");
		$('#edu7_attf').val("00/0000");
		$('#edu7_attt').val("00/0000");
}
else
{
 $('#edu7_div').slideDown();
 
 $('#edu7_scname').val("");
    $('#edu7_address').val("");
  $('#edu7_country').empty();
		$('#edu7_state').empty();
		
		
		$('#edu7_district').empty();
		
		
		$('#edu7_postoffice').empty();
		$('#edu7_post').val("");
		$('#edu7_course').val("");
		$('#edu7_attf').val("");
		$('#edu7_attt').val("");
}
			
			 
			
        
   }
   function change_occ_status()

 {
			
if($('#occ_status').prop("checked") ==false)
{

  $('#occ_div').slideUp();
   
  $('#occ_list').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#present_emp').val("N/A");
		$('#emp_number').val("N/A");
		$('#emp_address').val("N/A");
		$('#emp_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#emp_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#emp_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#emp_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#emp_post').val("N/A");
		$('#emp_salary').val("N/A");
		$('#emp_sal_mod1').val("N/A");
		$('#previous_emp').val("N/A");
		$('#pr_emp_number').val("N/A");
		$('#pr_emp_address').val("N/A");
		$('#pr_emp_country').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		$('#pr_emp_state').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#pr_emp_district').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		
		
		$('#pr_emp_postoffice').append($('<option/>', { 
        value: "N/A",
        text : "N/A",
        selected:true
 }));
		$('#pr_emp_post').val("N/A");
		$('#pr_emp_salary').val("N/A");
		$('#pr_emp_sal_mod1').val("N/A");
		  change_emp_status();
  
}
else
{


 $('#occ_div').slideDown();
  $('#occ_list').empty();
		$('#present_emp').val("");
		$('#emp_number').val("");
		$('#emp_address').val("");
		$('#emp_country').empty();
		
		$('#emp_state').empty();
		
		
		$('#emp_district').empty();
		
		$('#emp_postoffice').empty();
		$('#emp_post').val("");
		$('#emp_salary').val("");
		$('#emp_sal_mod1').val("");
		$('#previous_emp').val("");
		$('#pr_emp_number').val("");
		$('#pr_emp_address').val("");
		$('#pr_emp_country').empty();
		
		$('#pr_emp_state').empty();
		
		
		$('#pr_emp_district').empty();
		
		$('#pr_emp_postoffice').empty();
		$('#pr_emp_post').val("");
		$('#pr_emp_salary').val("");
		$('#pr_emp_sal_mod1').val("");
 
 change_emp_status();
}
			
			 
			
        
   }
   var clickme=0;
    function append_div()

 { clickme=clickme+1;
	if(clickme <= 6)
	{
	
		if(clickme  == 6){
		$( "#ch_div" ).append('<div class="row"><div class="col-md-6"><div class="form-group has-feedback"><label class="control-label">Child&#39;s Full Name:</label><input type="text" class="form-control" name="child_name' + clickme + '" ></div>	</div><div class="col-md-6"><div class="form-group"><label class="control-label">Child&#39;s Date of Birth:</label><input type="text" class="form-control rs-datepicker" name="child_dob' + clickme + '" data-date-format="mm/yyyy" data-date-viewmode="years" data-date-minviewmode="months" placeholder="MM/YYYY" readonly></div></div></div><div class="row"><div class="col-md-6"><div class="form-group"><label class="control-label">Child&#39;s Occupation:</label><select class="rs-selectize-single" name="child_occ_list' + clickme + '" id="child_occ_list' + clickme + '" placeholder="Select a occupation..."></select></div></div><div class="col-md-6"><div class="form-group has-feedback"><label class="control-label">Child&#39;s Education:</label><input type="text" class="form-control" name="child_edu' + clickme + '"  id="child_edu' + clickme + '" >	</div></div></div><div class="row"><div class="col-md-12"><div class="form-group"><label class="control-label">Living with</label>							<div class="radio radio-custom"><label class="radio-inline"><input type="radio" name="child_liv' + clickme + '" id="cs-radio-16" value="Me">						<span class="checker"></span>	Me</label><label class="radio-inline">							<input type="radio" name="child_liv' + clickme + '" id="cs-radio-17" value="Work place">			<span class="checker"></span>Work place	<label class="radio-inline">		<input type="radio" name="child_liv' + clickme + '" id="cs-radio-18" value="Other">				<span class="checker"></span>				Other				</label>						</div></div></div></div>	</div></div>');
		
		
		}else
		{	
	$( "#ch_div" ).append('<div class="row"><div class="col-md-6"><div class="form-group has-feedback"><label class="control-label">Child&#39;s Full Name:</label><input type="text" class="form-control" name="child_name' + clickme + '" ></div>	</div><div class="col-md-6"><div class="form-group"><label class="control-label">Child&#39;s Date of Birth:</label><input type="text" class="form-control rs-datepicker" name="child_dob' + clickme + '" data-date-format="mm/yyyy" data-date-viewmode="years" data-date-minviewmode="months" placeholder="MM/YYYY" readonly></div></div></div><div class="row"><div class="col-md-6"><div class="form-group"><label class="control-label">Child&#39;s Occupation:</label><select class="rs-selectize-single" name="child_occ_list' + clickme + '" id="child_occ_list' + clickme + '" placeholder="Select a occupation..."></select></div></div><div class="col-md-6"><div class="form-group has-feedback"><label class="control-label">Child&#39;s Education:</label><input type="text" class="form-control" name="child_edu' + clickme + '"  id="child_edu' + clickme + '" >	</div></div></div><div class="row"><div class="col-md-12"><div class="form-group"><label class="control-label">Living with</label>							<div class="radio radio-custom"><label class="radio-inline"><input type="radio" name="child_liv' + clickme + '" id="cs-radio-16" value="Me">						<span class="checker"></span>	Me</label><label class="radio-inline">							<input type="radio" name="child_liv' + clickme + '" id="cs-radio-17" value="Work place">			<span class="checker"></span>Work place	<label class="radio-inline">		<input type="radio" name="child_liv' + clickme + '" id="cs-radio-18" value="Other">				<span class="checker"></span>				Other				</label>						</div></div></div></div>	<div class="row"><div class="col-md-4"><button class="btn btn-default btn-outline btn-block m-b" onclick="return append_div()"><span class="glyphicon glyphicon-plus"></span>Add Child</button></div></div></div>');
		}
		$('.rs-datepicker').datepicker();
	var $mylist = $('#child_occ_list'+ clickme).selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$.ajax({
            url : 'select_pinode.php?load=occ_list',
            type: "GET",
            data: $(this).serialize(),
             dataType: 'json',
            success: function (data) {
            
              for (i = 0; i < data.length; i++) {           
              $mylist[0].selectize.addOption({text:data[i]});   
              
             }
             
          
         
            },
            error: function (jXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
			 
		return false;	
        
        }
   }
   function change_ch_status()
			 {
			
if($('#ch_status').prop("checked") ==false)
{

  $('#ch_div').slideUp();
}
else
{
 $('#ch_div').slideDown();
}
			
			 
			
        
   }
    function change_pan_status()

 {
			
if($('#pan_status').prop("checked") ==false)
{

  $('#pan_div').slideUp();
}
else
{
 $('#pan_div').slideDown();
}
}
 
function select_district(ids)
{ 
 if(ids=='h_district')
 {
    $h_district[0].selectize.clearOptions();
    var state=$('#h_state').val();
 }   else if(ids=='pr_district') 
 {
    $pr_district[0].selectize.clearOptions();	
    var state=$('#pr_state').val();	
    
} else if(ids=='emp_district') 
 {
    $emp_district[0].selectize.clearOptions();	
    var state=$('#emp_state').val();	
    
} else if(ids=='pr_emp_district') 
 {
    $pr_emp_district[0].selectize.clearOptions();	
    var state=$('#pr_emp_state').val();	
    
} else if(ids=='edu1_district') 
 {
 
    $edu1_district[0].selectize.clearOptions();	
    var state=$('#edu1_state').val();	
   
}
else if(ids=='edu2_district') 
 {
 
    $edu2_district[0].selectize.clearOptions();	
    var state=$('#edu2_state').val();	
   
}
else if(ids=='edu3_district') 
 {
 
    $edu3_district[0].selectize.clearOptions();	
    var state=$('#edu3_state').val();	
   
}
else if(ids=='edu4_district') 
 {
 
    $edu4_district[0].selectize.clearOptions();	
    var state=$('#edu4_state').val();	
   
}
else if(ids=='edu5_district') 
 {
 
    $edu5_district[0].selectize.clearOptions();	
    var state=$('#edu5_state').val();	
   
}
else if(ids=='edu6_district') 
 {
 
    $edu6_district[0].selectize.clearOptions();	
    var state=$('#edu6_state').val();	
   
}
else if(ids=='edu7_district') 
 {
 
    $edu7_district[0].selectize.clearOptions();	
    var state=$('#edu7_state').val();	
   
}

  $.ajax({
            url : 'select_pinode.php?load=district&state='+state,
            type: "GET",
            data: $(this).serialize(),
             dataType: 'json',
            success: function (data) {
          if(ids=='h_district')
          {
              
              for (i = 0; i < data.length; i++) {           
              $h_district[0].selectize.addOption({text:data[i]});   
              
             }
             
           } else if(ids=='pr_district')  
            {
             for (i = 0; i < data.length; i++) {           
              $pr_district[0].selectize.addOption({text:data[i]});   
              
             }
            } else if(ids=='emp_district')  
            {
             for (i = 0; i < data.length; i++) {           
              $emp_district[0].selectize.addOption({text:data[i]});   
              
             }
            } else if(ids=='pr_emp_district')  
            {
             for (i = 0; i < data.length; i++) {           
              $pr_emp_district[0].selectize.addOption({text:data[i]});   
              
             }
            } else if(ids=='edu1_district')  
            {
            
             for (i = 0; i < data.length; i++) {           
              $edu1_district[0].selectize.addOption({text:data[i]});   
              
             }
            } else if(ids=='edu2_district')  
            {
            
             for (i = 0; i < data.length; i++) {           
              $edu2_district[0].selectize.addOption({text:data[i]});   
              
             }
            }else if(ids=='edu3_district')  
            {
            
             for (i = 0; i < data.length; i++) {           
              $edu3_district[0].selectize.addOption({text:data[i]});   
              
             }
            }else if(ids=='edu4_district')  
            {
            
             for (i = 0; i < data.length; i++) {           
              $edu4_district[0].selectize.addOption({text:data[i]});   
              
             }
            }
            else if(ids=='edu5_district')  
            {
            
             for (i = 0; i < data.length; i++) {           
              $edu5_district[0].selectize.addOption({text:data[i]});   
              
             }
            }
            else if(ids=='edu6_district')  
            {
            
             for (i = 0; i < data.length; i++) {           
              $edu6_district[0].selectize.addOption({text:data[i]});   
              
             }
            }
            else if(ids=='edu7_district')  
            {
            
             for (i = 0; i < data.length; i++) {           
              $edu7_district[0].selectize.addOption({text:data[i]});   
              
             }
            }
         
            },
            error: function (jXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
}

function select_country(ids)
{ 
 if(ids == 'emp_state')
 {
    $emp_state[0].selectize.clearOptions();
    var country=$('#emp_country').val();
 }   else if(ids=='pr_emp_state') 
 {
    $pr_emp_state[0].selectize.clearOptions();	
    var country=$('#pr_emp_country').val();	
    
}  else if(ids=='edu1_state') 
 {
    $edu1_state[0].selectize.clearOptions();	
    var country=$('#edu1_country').val();	
    
}else if(ids=='edu2_state') 
 {
    $edu2_state[0].selectize.clearOptions();	
    var country=$('#edu2_country').val();	
    
}else if(ids=='edu3_state') 
 {
    $edu3_state[0].selectize.clearOptions();	
    var country=$('#edu3_country').val();	
    
}else if(ids=='edu4_state') 
 {
    $edu4_state[0].selectize.clearOptions();	
    var country=$('#edu4_country').val();	
    
}
else if(ids=='edu5_state') 
 {
    $edu5_state[0].selectize.clearOptions();	
    var country=$('#edu5_country').val();	
    
}
else if(ids=='edu6_state') 
 {
    $edu6_state[0].selectize.clearOptions();	
    var country=$('#edu6_country').val();	
    
}else if(ids=='edu7_state') 
 {
    $edu7_state[0].selectize.clearOptions();	
    var country=$('#edu7_country').val();	
    
}

  $.ajax({
            url : 'select_pinode.php?load=state&country='+country,
            type: "GET",
            data: $(this).serialize(),
             dataType: 'json',
            success: function (data) {
            
          if(ids == 'emp_state')
          {
            
              for (var i = 0; i < data.length; i++) {           
              $emp_state[0].selectize.addOption({text:data[i]});   
              
             }
             
           } else if(ids == 'pr_emp_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $pr_emp_state[0].selectize.addOption({text:data[i]});   
              
             }
            } else if(ids == 'edu1_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $edu1_state[0].selectize.addOption({text:data[i]});   
              
             }
            }  else if(ids == 'edu2_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $edu2_state[0].selectize.addOption({text:data[i]});   
              
             }
            }  else if(ids == 'edu3_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $edu3_state[0].selectize.addOption({text:data[i]});   
              
             }
            }  else if(ids == 'edu4_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $edu4_state[0].selectize.addOption({text:data[i]});   
              
             }
            } 
             else if(ids == 'edu5_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $edu5_state[0].selectize.addOption({text:data[i]});   
              
             }
            } 
             else if(ids == 'edu6_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $edu6_state[0].selectize.addOption({text:data[i]});   
              
             }
            } 
             else if(ids == 'edu7_state')  
            {
             for (var i = 0; i < data.length; i++) {           
              $edu7_state[0].selectize.addOption({text:data[i]});   
              
             }
            } 
         
            },
            error: function (jXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
}



function select_post(ids)
{

 if(ids=='h_postoffice')
 {
    $h_postoffice[0].selectize.clearOptions();
    var state=$('#h_state').val();
 var dist=$('#h_district').val();
 
  } else if(ids=='pr_postoffice') {
  
    $pr_postoffice[0].selectize.clearOptions();
    var state=$('#pr_state').val();
 var dist=$('#pr_district').val();
    } else if(ids=='emp_postoffice') {
  
    $emp_postoffice[0].selectize.clearOptions();
    var state=$('#emp_state').val();
 var dist=$('#emp_district').val();
    } else if(ids=='pr_emp_postoffice') {
  
    $pr_emp_postoffice[0].selectize.clearOptions();
    var state=$('#pr_emp_state').val();
 var dist=$('#pr_emp_district').val();
    } else if(ids=='edu1_postoffice') {
  
    $edu1_postoffice[0].selectize.clearOptions();
    var state=$('#edu1_state').val();
 var dist=$('#edu1_district').val();
    }else if(ids=='edu2_postoffice') {
  
    $edu2_postoffice[0].selectize.clearOptions();
    var state=$('#edu2_state').val();
 var dist=$('#edu2_district').val();
    }else if(ids=='edu3_postoffice') {
  
    $edu3_postoffice[0].selectize.clearOptions();
    var state=$('#edu3_state').val();
 var dist=$('#edu3_district').val();
    }else if(ids=='edu4_postoffice') {
  
    $edu4_postoffice[0].selectize.clearOptions();
    var state=$('#edu4_state').val();
 var dist=$('#edu4_district').val();
    }
    else if(ids=='edu5_postoffice') {
  
    $edu5_postoffice[0].selectize.clearOptions();
    var state=$('#edu5_state').val();
 var dist=$('#edu5_district').val();
    }
    else if(ids=='edu6_postoffice') {
  
    $edu6_postoffice[0].selectize.clearOptions();
    var state=$('#edu6_state').val();
 var dist=$('#edu6_district').val();
    }
    else if(ids=='edu7_postoffice') {
  
    $edu7_postoffice[0].selectize.clearOptions();
    var state=$('#edu7_state').val();
 var dist=$('#edu7_district').val();
    }
 
  $.ajax({
            url : 'select_pinode.php?load=post&state='+state+'&dist='+dist,
            type: "GET",
            data: $(this).serialize(),
            dataType: 'json',
            success: function (data) {
            
         if(ids=='h_postoffice') 
         {
	         for (i = 0; i < data.email.length; i++) {
	          $h_postoffice[0].selectize.addOption( {email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	        
	  } else if(ids=='pr_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $pr_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  } else if(ids=='emp_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $emp_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  } else if(ids=='pr_emp_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $pr_emp_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  } else if(ids=='edu1_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $edu1_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  } else if(ids=='edu2_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $edu2_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  } else if(ids=='edu3_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $edu3_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  } else if(ids=='edu4_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $edu4_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  }     else if(ids=='edu5_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $edu5_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  }     else if(ids=='edu6_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $edu6_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  }     else if(ids=='edu7_postoffice')  
	  {
	     
	         for (i = 0; i < data.email.length; i++) {
	              $edu7_postoffice[0].selectize.addOption({email: data.email[i], first_name:data.first_name[i]});
	          
	        }    
	  }                          
            },
            error: function (jXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
        
        
}

var $h_district = $('#h_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $occ_list = $('#occ_list').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $father_occ_list = $('#father_occ_list').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $mother_occ_list = $('#mother_occ_list').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $hus_occ_list = $('#hus_occ_list').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	
	var $child_occ_list= $('#child_occ_list').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});

	
var $pr_district = $('#pr_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
var $pr_postoffice = $('#pr_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				  $("#pr_post").val(post);
				
				
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});
	



////////emp ////

var $emp_postoffice = $('#emp_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#emp_post").val(post);
				
				if($('#emp_status').prop("checked") ==true)
					{
						$("#emp_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});
var $edu2_postoffice = $('#edu2_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#edu2_post").val(post);
				
				if($('#edu2_status').prop("checked") ==true)
					{
						$("#edu2_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});	
var $edu1_postoffice = $('#edu1_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#edu1_post").val(post);
				
				if($('#edu1_status').prop("checked") ==true)
					{
						$("#edu1_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});	
	
	var $edu3_postoffice = $('#edu3_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#edu3_post").val(post);
				
				if($('#edu3_status').prop("checked") ==true)
					{
						$("#edu3_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});	
	var $edu4_postoffice = $('#edu4_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#edu4_post").val(post);
				
				if($('#edu4_status').prop("checked") ==true)
					{
						$("#edu4_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});	
	var $edu5_postoffice = $('#edu5_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#edu5_post").val(post);
				
				if($('#edu5_status').prop("checked") ==true)
					{
						$("#edu5_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});	
	var $edu6_postoffice = $('#edu6_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#edu6_post").val(post);
				
				if($('#edu6_status').prop("checked") ==true)
					{
						$("#edu6_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});	
	var $edu7_postoffice = $('#edu7_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#edu7_post").val(post);
				
				if($('#edu7_status').prop("checked") ==true)
					{
						$("#edu7_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});	
	
	var $pr_emp_postoffice = $('#pr_emp_postoffice').selectize({
		
		persist: false,
		maxItems: 1,
		valueField: 'first_name',
		labelField: 'email',
		searchField: ['first_name', 'email'],
		sortField: [
			{field: 'first_name', direction: 'asc'}
		],
		options: [
			
			
		],
		render: {
			item: function(item, escape) {
				var name = formatName(item);
				var post =  name ? item.email : "";
				var caption = name ? name : item.email;
				
				   $("#pr_emp_post").val(post);
				
				if($('#pr_emp_status').prop("checked") ==true)
					{
						$("#pr_emp_post").val(post);
					}	
				return '<div>' +
					(caption ? '<span class="name">' + escape(caption) + '</span>' : '') +
					
				'</div>';
			},
			option: function(item, escape) {
				var name = formatName(item);
				var label = name || item.email;
				var caption = name ? item.email : null;
				
				
				return '<div>' +
					'<span class="label">' + escape(label) + '</span>' +
					(caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
				'</div>';
			}
		},
		
		create: function(input) {
		
			if (input) {
				return {first_name: input};
			}else
			{
			 alert('Invalid post.');
			return false;
			}
			
			
			
		}
	});
	
 var $emp_district = $('#emp_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	
	var $edu1_district = $('#edu1_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $edu2_district = $('#edu2_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $edu3_district = $('#edu3_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $edu4_district = $('#edu4_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $edu5_district = $('#edu5_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $edu6_district = $('#edu6_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $edu7_district = $('#edu7_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	var $pr_emp_district = $('#pr_emp_district').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
		
	});
	$('#emp_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#edu2_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#edu3_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#edu4_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#edu5_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#edu6_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#edu7_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	$('#edu1_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
var $emp_state = $('#emp_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
var $pr_emp_country =	$('#pr_emp_country').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
var $pr_emp_state =	$('#pr_emp_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	var $edu1_state =	$('#edu1_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});

var $edu2_state =	$('#edu2_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});

var $edu3_state =	$('#edu3_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});
	var $edu4_state =	$('#edu4_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});

var $edu5_state =	$('#edu5_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});

var $edu6_state =	$('#edu6_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});

var $edu7_state =	$('#edu7_state').selectize({
		create: true,
		persist: false,
		maxItems: 1,
		valueField: 'text',
		searchField:'text',
		sortField: {
			field: 'text',
			direction: 'asc'
		}
	});

