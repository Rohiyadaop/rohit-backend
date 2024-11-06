class apierror extends error {
  constructor(
    statuscode, 
    massage= "something went wrong ",
    error=[],
    stacke = ""
) {
    super(massage),
    this.statuscode = statuscode,
    this.data = null
    this.massage=massage,
    this.success=false,
    this.error=error

    if(stacke){
        this.stacke=stacke
    }else{
        Error.captureStackTrace(this,this.constructor)
    }
}
}
export {apierror}