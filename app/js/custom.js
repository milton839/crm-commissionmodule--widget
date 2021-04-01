ZOHO.embeddedApp.on("PageLoad",function(data){
    console.log("Page Loaded with data");
    console.log(data);
    console.log(data.EntityId[0]);


        ZOHO.CRM.API.getRecord({Entity:"Cases",RecordID:"1547883000030349011"})
        .then(function (data){
            console.log(data)
            console.log(data.data[0])
            console.log(data.data[0].Account_Name.name)
            const subject = data.data[0].Subject;
            const commissionDate = data.data[0].Commission_Date;
            const salesDate = data.data[0].Sales_Date;
            const vendorName = data.data[0].Vendor.id;
            const commissionOrigin = data.data[0].Case_Origin;
            const status = data.data[0].Status;
            const salesRepo = data.data[0].Sales_Rep;
            const ownerName  = data.data[0].Owner.id;
            const description = data.data[0].Description;
            const internalComments = data.data[0].Internal_Comments;
            const solution = data.data[0].Solution;
            const addComments = data.data[0].Add_Comment;

            console.log(subject);
            console.log(commissionDate);
            console.log(salesDate);

            var forms = document.getElementById("createRecord");
            forms.addEventListener('click', ()=>{
                const account = document.getElementById('account').value;
                    const commission = document.getElementById('commission').value;
                    const sales = document.getElementById('sales').value;
                    console.log(account);
                    console.log(commission);
                    console.log(sales);

                    const recordData = {
                        "Account_Name":account,
                        "Commission":commission,
                        "Monthly_Sales":sales,
                        "Subject":subject,
                        "Commission_Date":commissionDate,
                        "Sales_Date":salesDate,
                        "Vendor":vendorName,
                        "Case_Origin":commissionOrigin,
                        "Status":status,
                        "Sales_Rep":salesRepo,
                        "Description":description,
                        "Owner":ownerName,
                        "Internal_Comments":internalComments,
                        "Solution":solution,
                        "Add_Comment":addComments,
                    }
                        console.log('Record data commission module',recordData);
                        ZOHO.CRM.API.insertRecord({
                            Entity:"Cases",
                            APIData: recordData,
                        })
                        .then(function(data){
                            console.log(data)
                          
                        })
                        ZOHO.CRM.UI.Popup.closeReload()
                        .then(function(data){
                            console.log(data)
                        })
            })
        
    });
});
//=============Initializing the zoho widget=======
ZOHO.embeddedApp.init()