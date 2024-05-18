const errorMessages = {
    'auth/email-already-in-use': 'This email is already in use. Please try another one.',
    'auth/invalid-email': 'The email address is not valid.',
    'auth/user-disabled': 'This user has been disabled.',
    'auth/user-not-found': 'There is no user corresponding to this email.',
    'auth/invalid-credential':'You Have No Accout Please Signup',
    'auth/wrong-password': 'Incorrect password. Please try again.',
  'auth/network-request-failed':"Cheak Your Internet Connetction"
  };
  
  export const getErrorMessage = (errorCode) => {
    return errorMessages[errorCode] || 'An unexpected error occurred. Please try again later.';
  };