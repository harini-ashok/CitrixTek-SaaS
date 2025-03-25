function doPost(e) {
    var sheet = SpreadsheetApp.openById("1T1T6dqB-2eOzY_rEfhNE1NjK1ji1NEzrvzbPqWVqzEc").getSheetByName("Sheet1");
  
    if (!e || !e.postData) {
      Logger.log("No data received in POST request.");
      return ContentService.createTextOutput("Error: No data received")
        .setMimeType(ContentService.MimeType.TEXT);
    }
  
    var data = JSON.parse(e.postData.contents);
    Logger.log("Received Data: " + JSON.stringify(data));
  
    // Append data to Google Sheet
    sheet.appendRow([
      data.firstName || "No First Name",
      data.lastName || "No Last Name",
      data.company || "No Company",
      data.email || "No Email",
      data.phone || "No Phone",
      data.subject || "No Subject",
      data.message || "No Message",
      data.agreeComms ? "Yes" : "No", // Convert boolean to Yes/No
      new Date().toLocaleString() // Timestamp
    ]);
  
    Logger.log("Data successfully written to sheet.");
  
    return ContentService.createTextOutput("Success")
      .setMimeType(ContentService.MimeType.TEXT);
  }
  