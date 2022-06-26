import { DatePicker } from "./date-picker";

export interface PeopleModel {
    firstName: string;
    lastName: string;
    streetName: string;
    houseNumber: string;
    apartmentNumber: string;
    twon: string;
    telNumber: string;
    dob: string;
    age: string;
    peopleId: string;
    isRowAdded: boolean;
}


export const PeopleGridColumns = (context: any) => {
    return [
        { headerName: 'First Name', field: 'firstName', width: 500, suppressAutoSize: false },
        { headerName: 'Last Name', field: 'lastName' },
        { headerName: 'Street Name', field: 'streetName' },
        { headerName: 'House Number', field: 'houseNumber' },
        { headerName: 'Apartment Number ', field: 'apartmentNumber' },
        { headerName: 'Postal Code', field: 'postalCode' },
        { headerName: 'Town', field: 'twon' },
        { headerName: 'Phone Number', field: 'telNumber', type: "date" },
        { headerName: 'Date of Birth', field: 'dob', cellEditor: DatePicker, cellEditorPopup: true },
        { headerName: 'Age ', field: 'age', filter: 'agNumberColumnFilter', editable: false },
        {
            headerName: 'Action ', field: '', editable: false, cellRenderer: ((params: any) => {
                if (!params) return;
                const div = document.createElement('div');
                if (!params.data.isRowAdded) {
                    const del = document.createElement('button');
                    del.innerText = "Delete";
                    del.style.marginRight = "8px"
                    del.addEventListener('click', (e) => {
                        let savedData: Array<PeopleModel> = context.getPeoplFromLocalStorage;
                        savedData = savedData.filter((people: PeopleModel) => people.peopleId !== params.data.peopleId);
                        context.savePeopleToLocalStorage(savedData);
                    });
                    div.appendChild(del);
                }
                return div;
            })
        },
    ]
}