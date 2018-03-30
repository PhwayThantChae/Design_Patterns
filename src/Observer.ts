class OnlineIssueAcceptSubject {

    private observers = [];

    registerObserver(observer: IssueInterface) {
        this.observers.push(observer);
    }

    notifyObserver() {
        this.observers.forEach(observer => {
            observer.sendIssue();
        })
    }
}

interface IssueInterface {
    sendIssue();
}

class PresidentOffice implements IssueInterface {
    sendIssue() {
        console.log("send issue to president office");
    }
}

class MinisterOffice implements IssueInterface {
    sendIssue() {
        console.log("send issue to minister office");
    }
}

let issue = true;
if (issue) {
    let issueSubject: OnlineIssueAcceptSubject = new OnlineIssueAcceptSubject();
    issueSubject.registerObserver(new PresidentOffice());
    issueSubject.registerObserver(new MinisterOffice());
    issueSubject.notifyObserver();
}