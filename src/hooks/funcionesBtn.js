const funcionesBtn = () => {
    const limpiarTxt = (refs) => {
      if (!Array.isArray(refs)) return; 
      refs.forEach((ref) => {
        if (ref.current) {
          ref.current.value = "";
        }
      });
    };
  
    return { limpiarTxt };
  };
  
  export default funcionesBtn;