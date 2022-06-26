import { ICellEditorComp, ICellEditorParams } from "ag-grid-community";

// Date cell template for date picker
export class DatePicker implements ICellEditorComp {
    eInput!: HTMLInputElement;

    // gets called once before the renderer is used
    init(params: ICellEditorParams) {
        // create the cell
        this.eInput = document.createElement('input');
        this.eInput.value = params.value;
        this.eInput.type = "date";
        this.eInput.classList.add('ag-input');
        this.eInput.style.height = '100%';
        this.eInput.focus();
        this.eInput.addEventListener('change', (ev: any) => {
            let diff = (new Date().getTime() - new Date(ev.target.value).getTime()) / 1000;
            diff /= (60 * 60 * 24);
            params.data.age = Math.abs(Math.round(diff / 365.25));
        })
    }

    // gets called once when grid ready to insert the element
    getGui() {
        return this.eInput;
    }

    // focus and select can be done after the gui is attached
    afterGuiAttached() {
        this.eInput.focus();
        this.eInput.select();
    }

    // returns the new value after editing
    getValue() {
        return this.eInput.value;
    }

    // any cleanup we need to be done here
    destroy() {
        // but this example is simple, no cleanup, we could
        // even leave this method out as it's optional
    }

    // if true, then this editor will appear in a popup
    isPopup() {
        // and we could leave this method out also, false is the default
        return false;
    }
}