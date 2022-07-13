/* The class Departments has two properties: departmentId and displayName. 

The departmentId property is a number and the displayName property is a string. */
export class Departments {
    departmentId: number;
    displayName: string;
}
export class DepartmentsResponse {
    departments: Departments[]
}
