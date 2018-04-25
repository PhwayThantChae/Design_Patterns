interface Visitable {
    accept(visitor: Visitor);
}

class TenderForm implements Visitable {
    accept(visitor: Visitor) {
        visitor.visitTender(this);
    }
}

class CompanyForm implements Visitable {
    accept(visitor: Visitor) {
        visitor.visitCompany(this);
    }
}

interface Visitor {
    visitTender(tenderForm: TenderForm);
    visitCompany(CompanyForm: CompanyForm);
}

class FormatVisitor implements Visitor {
    visitTender(tenderForm: TenderForm) {
        console.log('Format in csv style');
    }
    visitCompany(companyForm: CompanyForm) {
        console.log('Format in json format');
    }
}

let formArray = [new CompanyForm(), new TenderForm()];

let formatVisitor: FormatVisitor = new FormatVisitor();
formArray.map( form => {
    form.accept(formatVisitor);
})