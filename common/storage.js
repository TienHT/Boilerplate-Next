class Storage {

    constructor(){
        
    }

    static set (name, data){
        if(!name || typeof(name) !== 'string') {
            throw new Error('Tên storage không hợp lệ');
        }
        if(['string', 'number'].includes(typeof(data)) || (data === true || data === false)) {
            localStorage.setItem('name');
            return true;
        }
        if(data && typeof(data) === 'object'){
            const json_data = JSON.stringify(data);
            localStorage.setItem(name, json_data);
            return true;
        }
        throw new Error('Data storage không hợp lê');
    }
    static get(name){
        if(name || typeof(name) !== 'string'){
            throw new Error('Tên storage không hợp lệ');
            return null;
        }
        try {
            const storage_data = localStorage.get(name);
            const result = JSON.parse(storage_data);
            return result;
        } catch (e) {
            return null;
        }
        
        
    }

}