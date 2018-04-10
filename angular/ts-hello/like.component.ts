
export class LikeComponent {

    constructor(private _likesCount: number, private _isSelected: boolean) {
    
    }

    onClick() {
        if(this._isSelected) {
            this._likesCount--;
            this._isSelected = false;
        } else {
            this._likesCount++;
            this._isSelected = true;
        }
    }

    get likesCount() {
        return this._likesCount;
    }

    get isSelected() {
        return this._isSelected;
    }
}