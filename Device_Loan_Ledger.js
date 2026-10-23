const equipmentLedger = {
  "1": {
    type: "PC",
    status: "CheckedOut",
    borrower: { name: "John Smith", email: "john@acme.org" },
    dueDate: "11/30/2025"
  },
  "2": {
    type: "Laptop",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: ""
  },
  "3": {
    type: "Laptop",
    status: "CheckedOut",
    borrower: { name: "Jane Doe", email: "jane@acme.org" },
    dueDate: "10/31/2025"
  },
  "4": {
    type: "iPad",
    status: "CheckedIn",
    borrower: { name: "", email: "" },
    dueDate: ""
  },
  "5": { type: "Laptop", status: "CheckedOut", borrower: { name: "John Doe", email: "john@acme.org" }, dueDate: "9/2/2025" },
};
function checkoutDevice(ledger, assetTag, borrower) {
  if (!ledger[assetTag]) {
    return {
      ledger: { ...ledger },
      message: `${assetTag} not found.`
    }
  }
  if (ledger[assetTag].status === "CheckedOut") {
    return {
      ledger: { ...ledger },
      message: `${assetTag} already checked out.`
    }
  }
  let updatedLedger = {
    ...ledger,
    [assetTag]: {
      ...ledger[assetTag],
      borrower: borrower,
      status: "CheckedOut",
    }
  }

  return {
    ledger: updatedLedger,
    message: `${assetTag} ${borrower.name}`
  }

}
function checkinDevice(ledger, assetTag) {
  if (!ledger[assetTag]) {
    return {
      ledger: { ...ledger },
      message: `${assetTag} not found.`
    }
  }
  let updatedLedger = {
    ...ledger,
    [assetTag]: {
      ...ledger[assetTag],
      borrower: { name: "", email: "" },
      dueDate: "",
      status: "CheckedIn",
    }
  }
  return {
    ledger: updatedLedger,
    message: `${assetTag}`
  }
}
function getFullDate(date) {
  let todayArr = date.split("/");
  let [tyear, tmonth, tday] = todayArr;
  let fullDate = tyear * 10000 + tmonth * 1000 + tday * 10;
  return fullDate;
}
function listOverdueDevices(ledger, today) {
  let deviceList = [];
  let fullToday = getFullDate(today);
  for (const assetTag in ledger) {
   if (ledger[assetTag].status === "CheckedOut") {
      const wholeToday = getFullDate(ledger[assetTag].dueDate);
      if (wholeToday < fullToday) {
        deviceList.push({...ledger[assetTag], wholeToday });
      }
    }
  }
  deviceList.sort((a, b) => a.wholeToday - b.wholeToday);
 
  return deviceList;
}

function serializeLedger(ledger) {
const jsonString = JSON.stringify(ledger);
return jsonString;
}
function loadLedger(ledger) {
const parseJson = JSON.parse(ledger);
return parseJson;
}