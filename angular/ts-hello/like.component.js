"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_likesCount, _isSelected) {
        this._likesCount = _likesCount;
        this._isSelected = _isSelected;
    }
    LikeComponent.prototype.onClick = function () {
        if (this._isSelected) {
            this._likesCount--;
            this._isSelected = false;
        }
        else {
            this._likesCount++;
            this._isSelected = true;
        }
    };
    Object.defineProperty(LikeComponent.prototype, "likesCount", {
        get: function () {
            return this._likesCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
