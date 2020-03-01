import { Subject } from 'rxjs';

const subject = new Subject();

export const contentService = {
    setId: (id) => subject.next({ id }),
    getId: () => subject.asObservable()
};