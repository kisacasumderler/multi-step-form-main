$(document).ready(function () {
    let plans, arcadeInput, advancedInput, proInput, arcadeLabelspan, advancedLabelspan, proLabelspan;
    plans = $("#step2 li label");
    arcadeLabelspan = $("label[for=arcade] span");
    arcadeInput = $("#arcade");
    advancedLabelspan = $("label[for=advanced] span");
    advancedInput = $("#advanced");
    proLabelspan = $("label[for=pro] span");
    proInput = $("#pro");

    $(".btn").mousedown(function () {
        $(this).css("background", "black");
    });
    $(".btn").mouseup(function () {
        $(this).removeAttr("style");
    });

    let LabelClear = () => {
        $("#step2 li label").removeAttr("style");
    }
    function AppendDiv(n) {
        if (n == 1) {
            plans.append("<div class='FreeCamp'>2 months free</div>");
        }
    }
    let n = 0;
    $("input[name=plan]").click(function () {
        LabelClear();
        $("label[for=" + this.id + "]").css("border", "2px solid hsl(243, 100%, 62%)");
    });
    $("#Monthly").click(function () {
        $(this).css("color", "hsl(213, 96%, 18%)");
        $("#Yearly").removeAttr("style");
        $(".circle").css("transform", "translate(0%,-50%)").animate({ "left": "0" });
        $(".FreeCamp").remove();
        n = 0;
        arcadeLabelspan.text("$09/mo");
        advancedLabelspan.text("$12/mo");
        proLabelspan.text("$15/mo");
        arcadeInput.attr("value", "Arcade_Mo");
        advancedInput.attr("value", "Advanced_Mo");
        proInput.attr("value", "Pro_Mo");
    });
    $("#Yearly").click(function () {
        n++;
        $(this).css("color", "hsl(213, 96%, 18%)");
        $("#Monthly").removeAttr("style");
        $(".circle").css("transform", "translate(-100%,-50%)").animate({ "left": "100%" });
        AppendDiv(n);
        arcadeLabelspan.text("$90/yr");
        advancedLabelspan.text("$120/yr");
        proLabelspan.text("$150/yr");
        arcadeInput.attr("value", "Arcade_Yr");
        advancedInput.attr("value", "Advanced_Yr");
        proInput.attr("value", "Pro_Yr");
    });

    $("#step3 input[type=checkbox]").change(function (e) {
        if (e.target.checked == true) {
            $(this).parent().css({ background: "hsl(217, 100%, 97%)", border: "1px solid hsl(243, 100%, 62%)" });
        }
        if (e.target.checked == false) {
            $(this).parent().removeAttr("style");
        }
    })
    $(".Step_s").first().nextAll().css("display","none");
    // form control 
    let btnnext, btnprev, stepsDiv, steps;
    btnnext = $(".btn");
    btnprev = $(".btnprev");
    stepsDiv = $(".colRight .Step_s");
    steps = $(".steps");
    let stepsDivClear = () => {
        stepsDiv.css("display", "none");
    }

    let stepsh3Clear = () => {
        steps.find("h3").removeAttr("style");
    }
    steps.eq(0).find("h3").css({ background: "hsl(228, 100%, 84%)", color: "hsl(243, 100%, 62%)", border: " 1px solid hsl(206, 94%, 87%)" });
    let btnnextExe = (n) => {
        stepsDivClear();
        stepsDiv.eq(n).css("display", "flex");
        stepsh3Clear();
        if (n == 4) {
            steps.eq(n - 1).find("h3").css({ background: "hsl(228, 100%, 84%)", color: "hsl(243, 100%, 62%)", border: " 1px solid hsl(206, 94%, 87%)" });

        } else {
            steps.eq(n).find("h3").css({ background: "hsl(228, 100%, 84%)", color: "hsl(243, 100%, 62%)", border: " 1px solid hsl(206, 94%, 87%)" });
        }
    }
    // steps 
    let ServiceTotal = 0;
    // step 1 
    let Name, Email, TelNo;
    Name = $("#Name");
    Email = $("#Email");
    TelNo = $("#TelNo");

    let isim = "";
    let emailAdres = "";
    let TelNumber = "";

    let FormControl = (value) => {
        if (value.val() != "") {
            if (value.attr("id") == "Name") {
                isim = $.trim(value.val());
                value.prev().find("span").removeClass("Warning");
                value.removeClass("inputWarning");
                return true;
            }
            if (value.attr("id") == "Email") {
                emailAdres = $.trim(value.val());
                value.prev().find("span").removeClass("Warning");
                value.removeClass("inputWarning");
                return true;
            }
            if (value.attr("id") == "TelNo") {
                TelNumber = $.trim(value.val());
                value.prev().find("span").removeClass("Warning");
                value.removeClass("inputWarning");
            }
            if (isim !== "" && emailAdres !== "" && TelNumber !== "") {
                // console.log(isim);
                btnnextExe(1);
                return true
            }
        }
        value.prev().find("span").addClass("Warning");
        value.prev().find("span").text("The field is required");
        value.addClass("inputWarning");
        return false;
    }
    btnnext.eq(0).click(function () {
        FormControl(Name);
        FormControl(Email);
        FormControl(TelNo);
    })


    // step 2 
    function FormControl2(value) {
        if (value.val() != "") {
            Step3PageShow(value.val().substr(-2, 2));
            ShowFinishHeader(value.val());
            btnnextExe(2);
        }
    }
    btnnext.eq(1).click(function () {
        FormControl2($("input[name=plan]:checked"));
        // btnnextExe(2);
    })
    // step 3 
    let OnlineService_P, LargerStorage_P, CostomizableProfile_P, OnlineService, LargerStorage, CustomizableProfile, OnlineServiceLabel, LargerStorageLabel, CustomizableProfileLabel;
    OnlineService_P = 1;
    LargerStorage_P = 2;
    CostomizableProfile_P = 2;
    OnlineService = $("#OnlineService");
    LargerStorage = $("#LargerStorage");
    CustomizableProfile = $("#CustomizableProfile");
    OnlineServiceLabel = $("label[for=OnlineService]").find("span");
    LargerStorageLabel = $("label[for=LargerStorage]").find("span");
    CustomizableProfileLabel = $("label[for=CustomizableProfile]").find("span");



    let Step3PageShow = (planTime) => {
        if (planTime == "Yr") {
            OnlineService_P = OnlineService_P * 10;
            LargerStorage_P = LargerStorage_P * 10;
            CostomizableProfile_P = CostomizableProfile_P * 10;
        }
        if (planTime == "Mo") {
            OnlineService_P = OnlineService_P * 1;
            LargerStorage_P = LargerStorage_P * 1;
            CostomizableProfile_P = CostomizableProfile_P * 1;
        }
        OnlineService.val(OnlineService_P);
        LargerStorage.val(LargerStorage_P);
        CustomizableProfile.val(CostomizableProfile_P);
        OnlineServiceLabel.text("$" + OnlineService_P + "/" + planTime);
        LargerStorageLabel.text("$" + LargerStorage_P + "/" + planTime);
        CustomizableProfileLabel.text("$" + CostomizableProfile_P + "/" + planTime);
    }

    function FormControl3(Checked) {
        if (Checked.val() != "") {
            for(let i = 0; i<$("#step3 input:checked").length; i++){
                let SP = $("#step3 input:checked")[i].id;
                ServiceTotal += Number($("#"+SP).val());

                let Name = $("#"+SP).next().find("h3").text();
                let Price = $("#"+SP).next().find("span").text();
                ServicesShow(Name,Price);
            }
            CallService(ServiceTotal);
            let PlanInf, Total_P;
            PlanInf = Number($("#PlanInf").text());
            Total_P = Number($("#Total_P").text());
            $("#Total_P").text(Total_P += PlanInf);
            btnnextExe(3);
        }
    }

    btnnext.eq(2).click(function () {
        FormControl3($("#step3 input:checked"));
    })

    let CallService = (ValId) => {
        TotalPrice(ValId);
    }
    
    // finish 
    let Arcade_P, Advanced_P, Pro_P;
    Arcade_P = 9;
    Advanced_P = 12;
    Pro_P = 15;
    let PN = "";
    let TotalText = "";

    let ShowFinishHeader = (value) => {

        if (value == "Arcade_Mo") {
            PN = "Arcade (Monthly)";
            Arcade_P = Arcade_P * 1;
            $("#Plan_P").html("$<b id='PlanInf'>"+Arcade_P+"</b>/mo");
        }
        if (value == "Advanced_Mo") {
            PN = "Advanced (Monthly)";
            Advanced_P = Advanced_P * 1;
            $("#Plan_P").html("$<b id='PlanInf'>"+Advanced_P+"</b>/mo");
        }
        if (value == "Pro_Mo") {
            PN = "Pro (Monthly)";
            Pro_P = Pro_P * 1;
            $("#Plan_P").html("$<b id='PlanInf'>"+Pro_P+"</b>/mo");
        }
        if (value == "Arcade_Yr") {
            PN = "Arcade (Yearly)";
            Arcade_P = Arcade_P * 10;
            $("#Plan_P").html("$<b id='PlanInf'>"+Arcade_P+"</b>/Yr");
        }
        if (value == "Advanced_Yr") {
            PN = "Advanced (Yearly)";
            Advanced_P = Advanced_P * 10;
            $("#Plan_P").html("$<b id='PlanInf'>"+Advanced_P+"</b>/Yr");
        }
        if (value == "Pro_Yr") {
            PN = "Pro (Yearly)";
            Pro_P = Pro_P * 10;
            $("#Plan_P").html("$<b id='PlanInf'>"+Pro_P+"</b>/Yr");
        }
        if(value.substr(-2,2) == "Mo"){
            TotalText = "Total (Monthly)";
        }
        if(value.substr(-2,2)=="Yr"){
            TotalText = "Total (Yearly)";
        }
        $("#Plan_C").text(PN);
        $("#PTime").text(value.substr(-2,2));
        $("#Total_R").text(TotalText);
    }

    let ChangeBtn = $(".btnChange");
    ChangeBtn.click(function () {
        OnlineService_P = 1;
        LargerStorage_P = 2;
        CostomizableProfile_P = 2;
        Arcade_P = 9;
        Advanced_P = 12;
        Pro_P = 15;
        ServiceTotal = 0;
        TotalPriceVal = 0;
        $("#FinishHead").siblings().remove();
        btnnextExe(1);
    })

    let TotalPriceVal = 0;

    let TotalPrice = (TotalVal) =>{
        TotalPriceVal += TotalVal;
        $("#Total_P").text(TotalPriceVal);
    }
    
    let ServicesShow = (n,p) => {
        let div = `<div><span id='Service_c'>${n}</span><span id='Service_P'>${p}</span></div>`;
        $("#FinishHead").after(div);
        
    }
    
    // btn prev 
    btnnext.eq(3).click(function () {
        btnnextExe(4);
    })
    let btnprevExe = (n) => {
        stepsDivClear();
        stepsDiv.eq(n).css("display", "flex");
        stepsh3Clear();
        steps.eq(n).find("h3").css({ background: "hsl(228, 100%, 84%)", color: "hsl(243, 100%, 62%)", border: " 1px solid hsl(206, 94%, 87%)" });
        OnlineService_P = 1;
        LargerStorage_P = 2;
        CostomizableProfile_P = 2;
    }
    btnprev.eq(0).click(function () {
        btnprevExe(0);
    })
    btnprev.eq(1).click(function () {
        btnprevExe(1)
        ServiceTotal = 0;
        TotalPriceVal = 0;
        Arcade_P = 9;
        Advanced_P = 12;
        Pro_P = 15;
    })
    btnprev.eq(2).click(function () {
        btnprevExe(2);
        ServiceTotal = 0;
        TotalPriceVal = 0;
        $("#FinishHead").siblings().remove();
    })

    $("#Confirm").click(function(){
        console.log($("#PlanForm").serializeArray());
    })
})

