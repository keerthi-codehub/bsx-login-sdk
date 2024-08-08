export function convertToSentenceCase(str) {
    let sentenceCasedStr = "";
  
    try {
      const result = str.replace(/([A-Z])/g, ' $1');
      sentenceCasedStr = result.charAt(0).toUpperCase() + result.slice(1);
  
    } catch (e) {
      console.log('Error in converting string, original string returned', e);
      sentenceCasedStr = str;
    }
  
    return sentenceCasedStr;
  }