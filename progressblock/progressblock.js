;(function () {
    function ProgressBlockManager(progressBlock) {
        this.progressBlock = progressBlock;
        this.fillCircle = progressBlock.querySelector('.circle-svg__fill');
        this.currentValue = 0;
        this.isAnimated = false;
        this.isHide = false;

        this.setMod = function (param, value) {
            switch (param) {
                case 'animated':
                    {
                        this.setAnimation(value);
                        break;
                    }
                case 'hidden':
                    {
                        this.setHide(value);
                        break;
                    }
            }
        };

        this.setValue = function (newValue) {
            newValue = newValue > 100 ? 100 : newValue;
            newValue = (isNaN(newValue) || newValue < 0) ? 0 : newValue;

            let radius = this.fillCircle.r.animVal.value;

            let circleLength = Math.PI * radius * 2;

            let arcLength = ((100 - newValue) / 100) * circleLength;

            this.fillCircle.style.strokeDashoffset = arcLength;
        };

        this.setAnimation = function (value) {
            if (value.toLowerCase() === 'yes') {
                this.isAnimated = true;
                this.progressBlock.style.webkitAnimationPlayState = 'running';
            } else {
                this.isAnimated = false;
                this.progressBlock.style.webkitAnimationPlayState = 'paused';
            }
        };

        this.setHide = function (value) {
            if (value.toLowerCase() === 'yes') {
                this.isHide = true;
                this.progressBlock.style.opacity = '0';
            } else {
                this.isHide = false;
                this.progressBlock.style.opacity = '1';
            }
        }
    };

    window.ProgressBlockManager = ProgressBlockManager;
}());