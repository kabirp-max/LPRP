
<?php include('header.php');?>


 
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
 

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<style>
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        background-color: #fefefe;
    }
    
    section.prent_sect {
    background-color: #f4f4f4;
}
    
    select#State {
    color: #828381;
    background-image: none !important;
    -webkit-appearance: auto;
}
    
    body.home.page-template-default.page.page-id-280.sliding-desktop-off.sliding-slide.layout-wide.sidebar-none.wpb-js-composer.js-comp-ver-6\.2\.0.vc_responsive {
    width: 100%;
    max-width: 1170px;
    
    /* background-color: #f4f4f4; */
    margin-left: auto;
    margin-right: auto;
}
    
.container {
    width: 100%;
    max-width: 1170px;
   
     /*background-color: #f4f4f4;*/

    margin-left: auto;
    margin-right: auto;
    /*
    -webkit-box-shadow: 0 17px 17px 0 rgb(0 0 0 / 15%), 0 27px 55px 0 rgb(0 0 0 / 30%);
    box-shadow: 0 17px 17px 0 rgb(0 0 0 / 15%), 0 27px 55px 0 rgb(0 0 0 / 30%);
    */
}
    
    div#site-header {
    display: none;
}
    
    section.prent_sect {
    /*padding-top: 28px;
        padding-bottom: 10px;*/
}
   
    /*
    .header_div {
        background-color: #fff;
        height: 75px;
        border-bottom: 4px solid #00b0f2;
    }
    */
    
    .header_div {
        position: relative;
        /* margin-bottom: 35px; */
        width: 100%;
        /*
        height: 310px;
        background-image: url(sm-images/hd-cover-banner.hero-s.jpg);
        */
    }
    
     
    
    .logo_div img {
        width: 230px;
        padding: 10px 5px;
    }
    
    .lft_content_div {
        width: calc(58% - 4px);
        display: inline-block;
        vertical-align: top;
    }
    
    img.cn_img {
    margin-top: 0px;
    margin-bottom: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 228px;
            margin-bottom: 20px;
}
    
    .rgt_content_div {
        width: calc(100% - 58% - 20px);
        display: inline-block;
        vertical-align: top;
    }
    
      
.rgt_content_div {
    padding-top: 10px;
}
 
    
    .rgt_content_div label, .rgt_content_div input, .rgt_content_div select {
      
        line-height: 1.4;
        font-size: 14px;
    }
    
    .rgt_content_div label {
    /*color: #e3e3e3;*/
        color: #fff;
        /*width: 100%;*/
        padding: 0 0px;
}
    
    .rgt_content_div input, .rgt_content_div select {
         width: calc(100% / 2 - 16px);
        display: inline-block;
        vertical-align: top;
        color: #040404;
    }
    
    .rgt_content_div select:focus {
        background: #fff;
    }
    
    .rgt_content_div input, .rgt_content_div select {
        margin-bottom: 15px;
        padding: 3px 15px;
        font-family: "Arial", sans-serif;
    }
    
    .rgt_content_div input[type="checkbox"] {
        width: auto ;
        margin-bottom: 0;
        height: auto;
    }
    
    .rgt_content_div input[type="radio"] {
        width: auto ;
        margin-bottom: 0;
    }
    
    p.cl_wh {
        line-height: 1.4;
        font-size: 14px;
    }
    
    
    
    .rgt_content_div input[type="submit"] {
    color: #ffffff;
    background-color: #0071c4;
    text-transform: capitalize;
    padding: 1em 2em;
    letter-spacing: 0.15em;
    font-weight: bold !important;
    transition: 0.3s;
    width: 80%;
        height: auto;
        margin-left: 50%;
        transform: translateX(-50%);
        border: none;
        margin-top: 25px;
        cursor: pointer;
}
    
    .rgt_content_div input[type="submit"]:hover {
        color: #dbdbdb !important;
    }
    
      
    
   .rgt_content_div h4 {
    text-align: left;
    margin-top: 7px;
       margin-bottom: 20px;
    font-size: 20px;
   color: #fff;
    font-weight: 500;
       font-family: "Roboto", sans-serif;
       padding-left: 9px;
    padding-top: 5px;
}
    
    /*
    .inner_rgt_content_div {
    background-color: #4a4f55;
    padding: 10px;
    border-radius: 5px;
}
    */
    
    .inner_rgt_content_div {
     background-color: #4b4e53;
        border-radius: 10px;
        padding: 2em;
    }
    
    .rgt_content_div input, .rgt_content_div select {
        margin-bottom: 15px;
        margin-top: 3px;
        padding: 6px 12px;
        border-radius: 4px;
        /*border: 1px solid #a4a7a1;*/
        border: 1px solid #ccc;
        outline: none;
        height: 34px;
        font-weight: 400 !important;
        font-size: 14px;
       /* padding-left: 40px; */
    }
    
    .w_half {
        width: calc(100% / 2 - 4px) !important;
        display: inline-block;
        vertical-align: top;
    }
    
    label.mb_one p {
    margin-top: 10px;
}
    
    .content_div {
        /*padding: 30px 17px 30px 22px;*/
        padding: 2em 4em;
    }
    
    .btm_lft_content_div {
    /*   padding:30px 0px 30px 0;
     -webkit-box-shadow: 0 20px 30px 0 rgb(69 73 91 / 8%);
    box-shadow: 0 20px 30px 0 rgb(69 73 91 / 8%);
        border-radius: 3px;
        */
        padding:0px 42px 40px 0px !important;
}
    
    .vc_custom_1596804478843 {
        display: none !important;
    }
    
    .btm_lft_content_div h2 {
    /*font-family: 'Arial', sans-serif;*/
    font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
    font-size: 1.4em;
    color: #122131;
    margin-top: 20px;
    margin-bottom: 20px;
    line-height: 1.3em;
        font-weight: 400;
        letter-spacing: 0;
}
    
    .btm_lft_content_div h3 {
        font-size: 30px;
    font-weight: 700;
    text-align: center;
}
    
    .inner_btm_lft_content_div {
    /*padding: 15px 30px 10px 10px;*/
        padding: 0px 0px 10px 20px;
}
    
    .btm_lft_content_div ul {
        margin-top: 0px;
    margin-bottom: 30px;
    margin-left: 24px;
}
    
    .btm_lft_content_div p {
        margin-bottom: 16px;
        font-size: 15px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px !important;
    line-height: 24px !important;
}
    
    .btm_lft_content_div .text-center {
        text-align: center;
    }
    
    .btm_lft_content_div ul li {
    line-height: 1.4;
    margin-bottom: 10px;
    /*text-align: justify;*/
    /*letter-spacing: -.5px;*/
        font-size: 16px;
}
    
    .mb_one p {
    line-height: 1.4;
    font-size: 14px;
    /*color: #c9c9c9;*/
    color: #2f3134;
    margin-top: 14px;
}
    
    .vc_custom_1604941072024 {
        display: none;
    }
    
    .btm_lft_content_div {
       /* border: 1px solid #f1f1f1; */
            padding: 40px 40px 40px 40px;
    }
    
    .lft_content_div {
    padding: 0 20px 0 0;
}
    
    .site-footer {
        position: relative;
    z-index: 1;
    }
    
    .top_header_div {
    padding: 20px 20px 20px 20px; 
}
    
    label {
        position: relative;
    }
    
    .icon_box {
    background: #eee;
    color: #000;
    /* padding: 4px !important; */
    position: absolute;
    top: -2px;
         border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        z-index: 2;
        display: none;
        
}
    
    .icon_box .fa {
    width: 33px;
    height: 33px;
    border-right: 1px solid #ccc;
       text-align: center;
    padding-top: 9px;
}
    
     input[type="checkbox"] {
        margin-top: 3px;
    }
    
    
    img.logo_ff {
        display: block;
    /* margin-left: auto; */
    margin-right: auto;
}
    
    .content_div {
    padding-top: 0em !important;
}

    
    @media screen and (max-width:900px) {
        .lft_content_div {
            width: calc(60% - 4px);
        }
        
        .rgt_content_div {
            width: calc(100% - 60% - 4px);
        }
        
         
    }
    
    
    
    @media screen and (max-width:900px) {
         .lft_content_div {
            width: 100%;
        }
        
        .rgt_content_div {
            width: 100%;
        }
    }
    
    
    
    @media screen and (max-width:767px) {
       
        
        .w_half {
            width: 100% !important;
        }
        
        .container {
    padding-left: 0px;
    padding-right: 0px;
}
        .lft_content_div {
            padding-right: 0;
        }
        
        .btm_lft_content_div h2 {
    font-size: 32px;
}
        .btm_lft_content_div {
    padding: 20px;
}
        .inner_rgt_content_div {
    padding: 20px;
    margin-top: 50px;
}
        
    }
    
    @media screen and (max-width:480px) {
        .content_div {
            padding: 5em 1em;
        }
    }

    @media screen and (max-width:420px) {
        .img_lft_content_div, .txt_lft_content_div {
            width: 100%;
        }
        
        .txt_lft_content_div h4 br {
            display: none;
        }
    }
    
    @media screen and (max-width:350px) {
         .rgt_content_div input, .rgt_content_div select {
             width: 100%;
             }
        
        span.icon_box {
            top: 25px;
            left: 0px;
        }
        
        .rgt_content_div label{
            padding: 0;
        }
        
       
    }
    
    p.label_qus {
        font-weight: 500;
        color: #fff;
        transform: translateY(18px) !important;
    }
    
    .color_itl {
    font-style: italic !important;
    color: #bababa !important;
        margin-top: 4px;
        display: block;
}
    
    .color_itl input[type="checkbox"] {
        margin-top: 2px;
    }
    
    .wid_full input {
        width: calc(100% - 12px) !important;
    }
    
    #no-outline:focus {
    background-color: transparent !important;
    color: #bcbcbc;
}
    

</style>
    

    
<body style="background-color: #f4f4f4;">
<section class="prent_sect" >
  
  <div class="top_header_div">
    <img src="sm-images/Auditboard-logo.png" class="logo_ff" style="width: 100%; max-width:250px;">  
</div>
  
    <div class="content_div">
            <div class="lft_content_div">
                 
                <div class="btm_lft_content_div"> 
                      
                    <h3> How Connected Is Risk Management at Your Organization? </h3><br> 
<!-- <h3>Why digital customer engagement is essential now </h3> -->
                    <div class="inner_btm_lft_content_div">
                        <!--<h4>-->
                        <!--    Not all audit management solutions are created equal. -->
                        <!--</h4>-->
                        <br>
                        <p>
                         <b>In The Connected Risk Report: Uniting Teams and Insights to Drive Organizational Resilience, created by AuditBoard in partnership with Ascend2 Research, explore what 500+ InfoSec, compliance, risk, and internal audit leaders had to say about their approaches to risk management — and their maturity levels in uniting people, data, processes, and technology.</b>  
                        </p>
                    
                     <p>
                       In today's rapidly evolving and highly interconnected risk landscape, organizations must manage increasing risk demands with agility and speed. Not only are organizations managing an unprecedented volume of risks, but they are often doing so without adequate resources, sufficient headcount, or state-of-the-art technology. This mismatch between increasing demand and insufficient capacity is creating what we call a risk exposure gap.
                     </p>
                  <p>
                      As a result of this gap, management isn’t receiving the information it needs to make strategic, risk-informed decisions that drive the organization forward.
                  </p>
                    <p>
                        For The Connected Risk Report: Uniting Teams and Insights to Drive Organizational Resilience, AuditBoard and Ascend2 Research surveyed over 500 information security, compliance, risk management, and internal audit leaders at various levels to uncover their approaches to risk management — and learn where they are along the path to connected risk.
                    </p>
                    <p>
                        Their analysis reveals that while many organizations believe they are advancing in connected risk maturity, significant gaps exist between executive-level perception and operational realities. Organizations can bridge these gaps by implementing connected risk management principles across audit, risk, InfoSec, and compliance teams, specifically by enhancing collaboration, integrating data, and promoting strategic alignment.
                    </p>
                    
                    <p>Download a free copy of the report for a detailed look at their findings, including:</p>
                    
                    
                        <p> 
                        
                            <ul>
                        <li>The <b>challenges and benefits</b> of a <b>connected approach</b> to risk management.</li>
                        <li><b>How executives vs. operational managers differed in their responses</b>, highlighting a potential disconnect between various levels of the organization.</li>
                    <li>Results to <b>benchmark your team’s progress towards greater connection</b> across people, data, processes, and technology, including AI use.</li>
                        <li><b>Best practices for getting started with connected risk</b>, with examples of quick wins your teams can implement now.</li>
                   </ul>
                    </p>
                    
                  
                        
                        
                    </div>
                    
                    
<!-- <h3>Why digital customer engagement is essential now </h3> -->
                    <!--<div class="inner_btm_lft_content_div">-->
                        
                    <!--</div>-->
                    
                    <br> 
                    
                  <img src="img/Table of Contents.JPG" class="logo_ff" style="width: 100%; position: relative; display: block; margin: 0 auto;">


                    
                </div>
            </div>
            <div class="rgt_content_div" style="">
                <div class="inner_rgt_content_div">
                    <h4 style="text-align:center;">Complete this form to download now</h4>
                    
                    <form class="#" method="post" action="img/AB-EB-the-connected-risk-report-uniting-teams-and-insights-to-drive-organizational-resilience.pdf" >
                        
                               <label> <span class="icon_box"><i class="fa fa-user" aria-hidden="true"></i></span>
                            <input type="text" name="first_name" placeholder="First Name *" required style=" width: 45%;"  >
                        </label>
                        <label><span class="icon_box"><i class="fa fa-user" aria-hidden="true"></i></span>
                            <input type="text" name="last_name" placeholder="Last Name *" required style=" width: 45%; float:right;">
                        </label>

                        <label><span class="icon_box"><i class="fa fa-envelope" aria-hidden="true"></i></span>
                            <input type="email" name="email_address" placeholder="Email Address *" required style=" width: 45%;">
                        </label>
                        <label><span class="icon_box"><i class="fa fa-phone" aria-hidden="true"></i></span>
                            <input type="text" name="phone" placeholder="Phone *" required style=" width: 45%; float:right;">
                        </label>
                        <label><span class="icon_box"><i class="fa fa-briefcase" aria-hidden="true"></i></span>
                            <input type="text" name="job_title" placeholder="Title *" required  style=" width: 45%;">
                        </label>
                        <label><span class="icon_box"><i class="fa fa-building" aria-hidden="true"></i></span>
                            <input type="text" name="company_name" placeholder="Company name *" required  style=" width: 45%; float:right;">
                        </label>
               
                       
            <select id="State" name="State" class="form-control" style="width: 45%; " required> 
               <option value="">State *</option>
               <option value="AL">Alabama</option>
	<option value="AK">Alaska</option>
	<option value="AZ">Arizona</option>
	<option value="AR">Arkansas</option>
	<option value="CA">California</option>
	<option value="CO">Colorado</option>
	<option value="CT">Connecticut</option>
	<option value="DE">Delaware</option>
	<option value="DC">District Of Columbia</option>
	<option value="FL">Florida</option>
	<option value="GA">Georgia</option>
	<option value="HI">Hawaii</option>
	<option value="ID">Idaho</option>
	<option value="IL">Illinois</option>
	<option value="IN">Indiana</option>
	<option value="IA">Iowa</option>
	<option value="KS">Kansas</option>
	<option value="KY">Kentucky</option>
	<option value="LA">Louisiana</option>
	<option value="ME">Maine</option>
	<option value="MD">Maryland</option>
	<option value="MA">Massachusetts</option>
	<option value="MI">Michigan</option>
	<option value="MN">Minnesota</option>
	<option value="MS">Mississippi</option>
	<option value="MO">Missouri</option>
	<option value="MT">Montana</option>
	<option value="NE">Nebraska</option>
	<option value="NV">Nevada</option>
	<option value="NH">New Hampshire</option>
	<option value="NJ">New Jersey</option>
	<option value="NM">New Mexico</option>
	<option value="NY">New York</option>
	<option value="NC">North Carolina</option>
	<option value="ND">North Dakota</option>
	<option value="OH">Ohio</option>
	<option value="OK">Oklahoma</option>
	<option value="OR">Oregon</option>
	<option value="PA">Pennsylvania</option>
	<option value="RI">Rhode Island</option>
	<option value="SC">South Carolina</option>
	<option value="SD">South Dakota</option>
	<option value="TN">Tennessee</option>
	<option value="TX">Texas</option>
	<option value="UT">Utah</option>
	<option value="VT">Vermont</option>
	<option value="VA">Virginia</option>
	<option value="WA">Washington</option>
	<option value="WV">West Virginia</option>
	<option value="WI">Wisconsin</option>
	<option value="WY">Wyoming</option>
            </select>
                       
                       <label><span class="icon_box"><i class="fa fa-briefcase" aria-hidden="true"></i></span>
                            <input type="text" name="country" placeholder="United States" disabled style=" width: 45%; float:right;">
                        </label>
                        
                         
                        <br>  <br>
                          
                        
                        <label for="tc_ch" style="font-size:15px;">
                          <input type="checkbox" name="fooby[7][]" for="Dynamics365-3" required>&nbsp; By downloading this asset, you agree that AuditBoard may contact you by phone and/or email about products, services and offerings and other offers that may be of interest to you. <a href="https://www.auditboard.com/privacy-notice/">Privacy Policy</a>
                        </label>
                         
                        
                        <br>
                        <input type="submit" name="submit" value="Download Now" style="">
                    
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
    
   <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
    <script>
               $(document).ready(function() {
               $('.myform').on('submit',function(){
                 //alert('done');
               // Add text 'loading...' right after clicking on the submit button. 
               //$('.output_message').text('Loading...'); 
    
               var form = $(this);
                    $.ajax({
                    // url: "smtp/workday.php",
                    method: form.attr('method'),
                    data: form.serialize(),
                    success: function(result){
                if (result){
                    /*$('.output_message').text('Message Sent!');  
                } else {
                    $('.output_message').text('Error Sending email!'); */
                    //alert(result);
                    $('.myform').trigger("reset");
                    //$('.output_message').text('Submit successfully.');
                    window.location.href = 'https://techintelpro.com/PDF/Live Video Recording (Video & Slides).mp4';
                }
            }
        });
    
        // Prevents default submission of the form after clicking on the submit button. 
        return false;   
      });
      });
    
    
    </script>
</body>
</html>
    
   
     