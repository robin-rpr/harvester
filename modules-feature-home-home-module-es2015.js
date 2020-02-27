(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-feature-home-home-module"],{

/***/ "../../node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js":
/*!**************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js ***!
  \**************************************************************************************************************************/
/*! exports provided: ResizableDirective, ResizeHandleDirective, ResizableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function() { return ResizableDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeHandleDirective", function() { return ResizeHandleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableModule", function() { return ResizableModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} value1
 * @param {?} value2
 * @param {?=} precision
 * @return {?}
 */

function isNumberCloseTo(value1, value2, precision = 3) {
    /** @type {?} */
    const diff = Math.abs(value1 - value2);
    return diff < precision;
}
/**
 * @param {?} startingRect
 * @param {?} edges
 * @param {?} clientX
 * @param {?} clientY
 * @return {?}
 */
function getNewBoundingRectangle(startingRect, edges, clientX, clientY) {
    /** @type {?} */
    const newBoundingRect = {
        top: startingRect.top,
        bottom: startingRect.bottom,
        left: startingRect.left,
        right: startingRect.right
    };
    if (edges.top) {
        newBoundingRect.top += clientY;
    }
    if (edges.bottom) {
        newBoundingRect.bottom += clientY;
    }
    if (edges.left) {
        newBoundingRect.left += clientX;
    }
    if (edges.right) {
        newBoundingRect.right += clientX;
    }
    newBoundingRect.height = newBoundingRect.bottom - newBoundingRect.top;
    newBoundingRect.width = newBoundingRect.right - newBoundingRect.left;
    return newBoundingRect;
}
/**
 * @param {?} element
 * @param {?} ghostElementPositioning
 * @return {?}
 */
function getElementRect(element, ghostElementPositioning) {
    /** @type {?} */
    let translateX = 0;
    /** @type {?} */
    let translateY = 0;
    /** @type {?} */
    const style = element.nativeElement.style;
    /** @type {?} */
    const transformProperties = [
        'transform',
        '-ms-transform',
        '-moz-transform',
        '-o-transform'
    ];
    /** @type {?} */
    const transform = transformProperties
        .map(property => style[property])
        .find(value => !!value);
    if (transform && transform.includes('translate')) {
        translateX = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$1');
        translateY = transform.replace(/.*translate\((.*)px, (.*)px\).*/, '$2');
    }
    if (ghostElementPositioning === 'absolute') {
        return {
            height: element.nativeElement.offsetHeight,
            width: element.nativeElement.offsetWidth,
            top: element.nativeElement.offsetTop - translateY,
            bottom: element.nativeElement.offsetHeight +
                element.nativeElement.offsetTop -
                translateY,
            left: element.nativeElement.offsetLeft - translateX,
            right: element.nativeElement.offsetWidth +
                element.nativeElement.offsetLeft -
                translateX
        };
    }
    else {
        /** @type {?} */
        const boundingRect = element.nativeElement.getBoundingClientRect();
        return {
            height: boundingRect.height,
            width: boundingRect.width,
            top: boundingRect.top - translateY,
            bottom: boundingRect.bottom - translateY,
            left: boundingRect.left - translateX,
            right: boundingRect.right - translateX,
            scrollTop: element.nativeElement.scrollTop,
            scrollLeft: element.nativeElement.scrollLeft
        };
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingY({ clientY, rect }) {
    return clientY >= rect.top && clientY <= rect.bottom;
}
/**
 * @param {?} __0
 * @return {?}
 */
function isWithinBoundingX({ clientX, rect }) {
    return clientX >= rect.left && clientX <= rect.right;
}
/**
 * @param {?} __0
 * @return {?}
 */
function getResizeEdges({ clientX, clientY, elm, allowedEdges, cursorPrecision }) {
    /** @type {?} */
    const elmPosition = elm.nativeElement.getBoundingClientRect();
    /** @type {?} */
    const edges = {};
    if (allowedEdges.left &&
        isNumberCloseTo(clientX, elmPosition.left, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.left = true;
    }
    if (allowedEdges.right &&
        isNumberCloseTo(clientX, elmPosition.right, cursorPrecision) &&
        isWithinBoundingY({ clientY, rect: elmPosition })) {
        edges.right = true;
    }
    if (allowedEdges.top &&
        isNumberCloseTo(clientY, elmPosition.top, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.top = true;
    }
    if (allowedEdges.bottom &&
        isNumberCloseTo(clientY, elmPosition.bottom, cursorPrecision) &&
        isWithinBoundingX({ clientX, rect: elmPosition })) {
        edges.bottom = true;
    }
    return edges;
}
/** @type {?} */
const DEFAULT_RESIZE_CURSORS = Object.freeze({
    topLeft: 'nw-resize',
    topRight: 'ne-resize',
    bottomLeft: 'sw-resize',
    bottomRight: 'se-resize',
    leftOrRight: 'col-resize',
    topOrBottom: 'row-resize'
});
/**
 * @param {?} edges
 * @param {?} cursors
 * @return {?}
 */
function getResizeCursor(edges, cursors) {
    if (edges.left && edges.top) {
        return cursors.topLeft;
    }
    else if (edges.right && edges.top) {
        return cursors.topRight;
    }
    else if (edges.left && edges.bottom) {
        return cursors.bottomLeft;
    }
    else if (edges.right && edges.bottom) {
        return cursors.bottomRight;
    }
    else if (edges.left || edges.right) {
        return cursors.leftOrRight;
    }
    else if (edges.top || edges.bottom) {
        return cursors.topOrBottom;
    }
    else {
        return '';
    }
}
/**
 * @param {?} __0
 * @return {?}
 */
function getEdgesDiff({ edges, initialRectangle, newRectangle }) {
    /** @type {?} */
    const edgesDiff = {};
    Object.keys(edges).forEach(edge => {
        edgesDiff[edge] = (newRectangle[edge] || 0) - (initialRectangle[edge] || 0);
    });
    return edgesDiff;
}
/** @type {?} */
const RESIZE_ACTIVE_CLASS = 'resize-active';
/** @type {?} */
const RESIZE_LEFT_HOVER_CLASS = 'resize-left-hover';
/** @type {?} */
const RESIZE_RIGHT_HOVER_CLASS = 'resize-right-hover';
/** @type {?} */
const RESIZE_TOP_HOVER_CLASS = 'resize-top-hover';
/** @type {?} */
const RESIZE_BOTTOM_HOVER_CLASS = 'resize-bottom-hover';
/** @type {?} */
const RESIZE_GHOST_ELEMENT_CLASS = 'resize-ghost-element';
/** @type {?} */
const MOUSE_MOVE_THROTTLE_MS = 50;
/**
 * Place this on an element to make it resizable. For example:
 *
 * ```html
 * <div
 *   mwlResizable
 *   [resizeEdges]="{bottom: true, right: true, top: true, left: true}"
 *   [enableGhostResize]="true">
 * </div>
 * ```
 */
class ResizableDirective {
    /**
     * @hidden
     * @param {?} platformId
     * @param {?} renderer
     * @param {?} elm
     * @param {?} zone
     */
    constructor(platformId, renderer, elm, zone) {
        this.platformId = platformId;
        this.renderer = renderer;
        this.elm = elm;
        this.zone = zone;
        /**
         * The edges that an element can be resized from. Pass an object like `{top: true, bottom: false}`. By default no edges can be resized.
         * @deprecated use a resize handle instead that positions itself to the side of the element you would like to resize
         */
        this.resizeEdges = {};
        /**
         * Set to `true` to enable a temporary resizing effect of the element in between the `resizeStart` and `resizeEnd` events.
         */
        this.enableGhostResize = false;
        /**
         * A snap grid that resize events will be locked to.
         *
         * e.g. to only allow the element to be resized every 10px set it to `{left: 10, right: 10}`
         */
        this.resizeSnapGrid = {};
        /**
         * The mouse cursors that will be set on the resize edges
         */
        this.resizeCursors = DEFAULT_RESIZE_CURSORS;
        /**
         * Mouse over thickness to active cursor.
         * @deprecated invalid when you migrate to use resize handles instead of setting resizeEdges on the element
         */
        this.resizeCursorPrecision = 3;
        /**
         * Define the positioning of the ghost element (can be fixed or absolute)
         */
        this.ghostElementPositioning = 'fixed';
        /**
         * Allow elements to be resized to negative dimensions
         */
        this.allowNegativeResizes = false;
        /**
         * The mouse move throttle in milliseconds, default: 50 ms
         */
        this.mouseMoveThrottleMS = MOUSE_MOVE_THROTTLE_MS;
        /**
         * Called when the mouse is pressed and a resize event is about to begin. `$event` is a `ResizeEvent` object.
         */
        this.resizeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called as the mouse is dragged after a resize event has begun. `$event` is a `ResizeEvent` object.
         */
        this.resizing = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Called after the mouse is released after a resize event. `$event` is a `ResizeEvent` object.
         */
        this.resizeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @hidden
         */
        this.mouseup = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */
        this.mousedown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        /**
         * @hidden
         */
        this.mousemove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.resizeEdges$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.pointerEventListeners = PointerEventListeners.getInstance(renderer, zone);
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const mousedown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerDown, this.mousedown);
        /** @type {?} */
        const mousemove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerMove, this.mousemove).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(({ event }) => {
            if (currentResize) {
                event.preventDefault();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        /** @type {?} */
        const mouseup$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.pointerEventListeners.pointerUp, this.mouseup);
        /** @type {?} */
        let currentResize;
        /** @type {?} */
        const removeGhostElement = () => {
            if (currentResize && currentResize.clonedNode) {
                this.elm.nativeElement.parentElement.removeChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'inherit');
            }
        };
        /** @type {?} */
        const getResizeCursors = () => {
            return Object.assign({}, DEFAULT_RESIZE_CURSORS, this.resizeCursors);
        };
        this.resizeEdges$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(this.resizeEdges), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => {
            return (this.resizeEdges &&
                Object.keys(this.resizeEdges).some(edge => !!this.resizeEdges[edge]));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(legacyResizeEdgesEnabled => legacyResizeEdgesEnabled ? mousemove$ : rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["auditTime"])(this.mouseMoveThrottleMS), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(({ clientX, clientY }) => {
            /** @type {?} */
            const resizeEdges = getResizeEdges({
                clientX,
                clientY,
                elm: this.elm,
                allowedEdges: this.resizeEdges,
                cursorPrecision: this.resizeCursorPrecision
            });
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            if (!currentResize) {
                /** @type {?} */
                const cursor = getResizeCursor(resizeEdges, resizeCursors);
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', cursor);
            }
            this.setElementClass(this.elm, RESIZE_LEFT_HOVER_CLASS, resizeEdges.left === true);
            this.setElementClass(this.elm, RESIZE_RIGHT_HOVER_CLASS, resizeEdges.right === true);
            this.setElementClass(this.elm, RESIZE_TOP_HOVER_CLASS, resizeEdges.top === true);
            this.setElementClass(this.elm, RESIZE_BOTTOM_HOVER_CLASS, resizeEdges.bottom === true);
        });
        /** @type {?} */
        const mousedrag = mousedown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(startCoords => {
            /**
             * @param {?} moveCoords
             * @return {?}
             */
            function getDiff(moveCoords) {
                return {
                    clientX: moveCoords.clientX - startCoords.clientX,
                    clientY: moveCoords.clientY - startCoords.clientY
                };
            }
            /** @type {?} */
            const getSnapGrid = () => {
                /** @type {?} */
                const snapGrid = { x: 1, y: 1 };
                if (currentResize) {
                    if (this.resizeSnapGrid.left && currentResize.edges.left) {
                        snapGrid.x = +this.resizeSnapGrid.left;
                    }
                    else if (this.resizeSnapGrid.right &&
                        currentResize.edges.right) {
                        snapGrid.x = +this.resizeSnapGrid.right;
                    }
                    if (this.resizeSnapGrid.top && currentResize.edges.top) {
                        snapGrid.y = +this.resizeSnapGrid.top;
                    }
                    else if (this.resizeSnapGrid.bottom &&
                        currentResize.edges.bottom) {
                        snapGrid.y = +this.resizeSnapGrid.bottom;
                    }
                }
                return snapGrid;
            };
            /**
             * @param {?} coords
             * @param {?} snapGrid
             * @return {?}
             */
            function getGrid(coords, snapGrid) {
                return {
                    x: Math.ceil(coords.clientX / snapGrid.x),
                    y: Math.ceil(coords.clientY / snapGrid.y)
                };
            }
            return ((/** @type {?} */ (Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(coords => [, coords])), mousemove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["pairwise"])())))))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([previousCoords, newCoords]) => {
                return [
                    previousCoords ? getDiff(previousCoords) : previousCoords,
                    getDiff(newCoords)
                ];
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(([previousCoords, newCoords]) => {
                if (!previousCoords) {
                    return true;
                }
                /** @type {?} */
                const snapGrid = getSnapGrid();
                /** @type {?} */
                const previousGrid = getGrid(previousCoords, snapGrid);
                /** @type {?} */
                const newGrid = getGrid(newCoords, snapGrid);
                return (previousGrid.x !== newGrid.x || previousGrid.y !== newGrid.y);
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(([, newCoords]) => {
                /** @type {?} */
                const snapGrid = getSnapGrid();
                return {
                    clientX: Math.round(newCoords.clientX / snapGrid.x) * snapGrid.x,
                    clientY: Math.round(newCoords.clientY / snapGrid.y) * snapGrid.y
                };
            }))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(mouseup$, mousedown$)));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(() => !!currentResize));
        mousedrag
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ clientX, clientY }) => {
            return getNewBoundingRectangle((/** @type {?} */ (currentResize)).startingRect, (/** @type {?} */ (currentResize)).edges, clientX, clientY);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((newBoundingRect) => {
            return (this.allowNegativeResizes ||
                !!(newBoundingRect.height &&
                    newBoundingRect.width &&
                    newBoundingRect.height > 0 &&
                    newBoundingRect.width > 0));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((newBoundingRect) => {
            return this.validateResize
                ? this.validateResize({
                    rectangle: newBoundingRect,
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    })
                })
                : true;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((newBoundingRect) => {
            if (currentResize && currentResize.clonedNode) {
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${newBoundingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${newBoundingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${newBoundingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${newBoundingRect.left}px`);
            }
            this.zone.run(() => {
                this.resizing.emit({
                    edges: getEdgesDiff({
                        edges: (/** @type {?} */ (currentResize)).edges,
                        initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                        newRectangle: newBoundingRect
                    }),
                    rectangle: newBoundingRect
                });
            });
            (/** @type {?} */ (currentResize)).currentRect = newBoundingRect;
        });
        mousedown$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(({ clientX, clientY, edges }) => {
            return (edges ||
                getResizeEdges({
                    clientX,
                    clientY,
                    elm: this.elm,
                    allowedEdges: this.resizeEdges,
                    cursorPrecision: this.resizeCursorPrecision
                }));
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])((edges) => {
            return Object.keys(edges).length > 0;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe((edges) => {
            if (currentResize) {
                removeGhostElement();
            }
            /** @type {?} */
            const startingRect = getElementRect(this.elm, this.ghostElementPositioning);
            currentResize = {
                edges,
                startingRect,
                currentRect: startingRect
            };
            /** @type {?} */
            const resizeCursors = getResizeCursors();
            /** @type {?} */
            const cursor = getResizeCursor(currentResize.edges, resizeCursors);
            this.renderer.setStyle(document.body, 'cursor', cursor);
            this.setElementClass(this.elm, RESIZE_ACTIVE_CLASS, true);
            if (this.enableGhostResize) {
                currentResize.clonedNode = this.elm.nativeElement.cloneNode(true);
                this.elm.nativeElement.parentElement.appendChild(currentResize.clonedNode);
                this.renderer.setStyle(this.elm.nativeElement, 'visibility', 'hidden');
                this.renderer.setStyle(currentResize.clonedNode, 'position', this.ghostElementPositioning);
                this.renderer.setStyle(currentResize.clonedNode, 'left', `${currentResize.startingRect.left}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'top', `${currentResize.startingRect.top}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'height', `${currentResize.startingRect.height}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'width', `${currentResize.startingRect.width}px`);
                this.renderer.setStyle(currentResize.clonedNode, 'cursor', getResizeCursor(currentResize.edges, resizeCursors));
                this.renderer.addClass(currentResize.clonedNode, RESIZE_GHOST_ELEMENT_CLASS);
                (/** @type {?} */ (currentResize.clonedNode)).scrollTop = (/** @type {?} */ (currentResize.startingRect
                    .scrollTop));
                (/** @type {?} */ (currentResize.clonedNode)).scrollLeft = (/** @type {?} */ (currentResize.startingRect
                    .scrollLeft));
            }
            this.zone.run(() => {
                this.resizeStart.emit({
                    edges: getEdgesDiff({
                        edges,
                        initialRectangle: startingRect,
                        newRectangle: startingRect
                    }),
                    rectangle: getNewBoundingRectangle(startingRect, {}, 0, 0)
                });
            });
        });
        mouseup$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$)).subscribe(() => {
            if (currentResize) {
                this.renderer.removeClass(this.elm.nativeElement, RESIZE_ACTIVE_CLASS);
                this.renderer.setStyle(document.body, 'cursor', '');
                this.renderer.setStyle(this.elm.nativeElement, 'cursor', '');
                this.zone.run(() => {
                    this.resizeEnd.emit({
                        edges: getEdgesDiff({
                            edges: (/** @type {?} */ (currentResize)).edges,
                            initialRectangle: (/** @type {?} */ (currentResize)).startingRect,
                            newRectangle: (/** @type {?} */ (currentResize)).currentRect
                        }),
                        rectangle: (/** @type {?} */ (currentResize)).currentRect
                    });
                });
                removeGhostElement();
                currentResize = null;
            }
        });
    }
    /**
     * @hidden
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.resizeEdges) {
            this.resizeEdges$.next(this.resizeEdges);
        }
    }
    /**
     * @hidden
     * @return {?}
     */
    ngOnDestroy() {
        // browser check for angular universal, because it doesn't know what document is
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_0__["isPlatformBrowser"])(this.platformId)) {
            this.renderer.setStyle(document.body, 'cursor', '');
        }
        this.mousedown.complete();
        this.mouseup.complete();
        this.mousemove.complete();
        this.resizeEdges$.complete();
        this.destroy$.next();
    }
    /**
     * @private
     * @param {?} elm
     * @param {?} name
     * @param {?} add
     * @return {?}
     */
    setElementClass(elm, name, add) {
        if (add) {
            this.renderer.addClass(elm.nativeElement, name);
        }
        else {
            this.renderer.removeClass(elm.nativeElement, name);
        }
    }
}
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) { return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
ResizableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ResizableDirective, selectors: [["", "mwlResizable", ""]], inputs: { resizeEdges: "resizeEdges", enableGhostResize: "enableGhostResize", resizeSnapGrid: "resizeSnapGrid", resizeCursors: "resizeCursors", resizeCursorPrecision: "resizeCursorPrecision", ghostElementPositioning: "ghostElementPositioning", allowNegativeResizes: "allowNegativeResizes", mouseMoveThrottleMS: "mouseMoveThrottleMS", validateResize: "validateResize" }, outputs: { resizeStart: "resizeStart", resizing: "resizing", resizeEnd: "resizeEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]()] });
/** @nocollapse */
ResizableDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"],] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
ResizableDirective.propDecorators = {
    validateResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    enableGhostResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    resizeSnapGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    resizeCursors: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    resizeCursorPrecision: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    ghostElementPositioning: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    allowNegativeResizes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    mouseMoveThrottleMS: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    resizeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    resizing: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    resizeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[mwlResizable]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["PLATFORM_ID"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, { resizeEdges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], enableGhostResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], resizeSnapGrid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], resizeCursors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], resizeCursorPrecision: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], ghostElementPositioning: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], allowNegativeResizes: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], mouseMoveThrottleMS: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], resizeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], resizing: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], resizeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], validateResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();
class PointerEventListeners {
    // tslint:disable-line
    /**
     * @param {?} renderer
     * @param {?} zone
     * @return {?}
     */
    static getInstance(renderer, zone) {
        if (!PointerEventListeners.instance) {
            PointerEventListeners.instance = new PointerEventListeners(renderer, zone);
        }
        return PointerEventListeners.instance;
    }
    /**
     * @param {?} renderer
     * @param {?} zone
     */
    constructor(renderer, zone) {
        this.pointerDown = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            /** @type {?} */
            let unsubscribeMouseDown;
            /** @type {?} */
            let unsubscribeTouchStart;
            zone.runOutsideAngular(() => {
                unsubscribeMouseDown = renderer.listen('document', 'mousedown', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchStart = renderer.listen('document', 'touchstart', (event) => {
                    observer.next({
                        clientX: event.touches[0].clientX,
                        clientY: event.touches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseDown();
                unsubscribeTouchStart();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            /** @type {?} */
            let unsubscribeMouseMove;
            /** @type {?} */
            let unsubscribeTouchMove;
            zone.runOutsideAngular(() => {
                unsubscribeMouseMove = renderer.listen('document', 'mousemove', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchMove = renderer.listen('document', 'touchmove', (event) => {
                    observer.next({
                        clientX: event.targetTouches[0].clientX,
                        clientY: event.targetTouches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseMove();
                unsubscribeTouchMove();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"]((observer) => {
            /** @type {?} */
            let unsubscribeMouseUp;
            /** @type {?} */
            let unsubscribeTouchEnd;
            /** @type {?} */
            let unsubscribeTouchCancel;
            zone.runOutsideAngular(() => {
                unsubscribeMouseUp = renderer.listen('document', 'mouseup', (event) => {
                    observer.next({
                        clientX: event.clientX,
                        clientY: event.clientY,
                        event
                    });
                });
                unsubscribeTouchEnd = renderer.listen('document', 'touchend', (event) => {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event
                    });
                });
                unsubscribeTouchCancel = renderer.listen('document', 'touchcancel', (event) => {
                    observer.next({
                        clientX: event.changedTouches[0].clientX,
                        clientY: event.changedTouches[0].clientY,
                        event
                    });
                });
            });
            return () => {
                unsubscribeMouseUp();
                unsubscribeTouchEnd();
                unsubscribeTouchCancel();
            };
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["share"])());
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * An element placed inside a `mwlResizable` directive to be used as a drag and resize handle
 *
 * For example
 *
 * ```html
 * <div mwlResizable>
 *   <div mwlResizeHandle [resizeEdges]="{bottom: true, right: true}"></div>
 * </div>
 * ```
 */
class ResizeHandleDirective {
    /**
     * @param {?} renderer
     * @param {?} element
     * @param {?} zone
     * @param {?} resizable
     */
    constructor(renderer, element, zone, resizable) {
        this.renderer = renderer;
        this.element = element;
        this.zone = zone;
        this.resizable = resizable;
        /**
         * The `Edges` object that contains the edges of the parent element that dragging the handle will trigger a resize on
         */
        this.resizeEdges = {};
        this.eventListeners = {};
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeEventListeners();
    }
    /**
     * @hidden
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMousedown(event, clientX, clientY) {
        event.preventDefault();
        this.zone.runOutsideAngular(() => {
            if (!this.eventListeners.touchmove) {
                this.eventListeners.touchmove = this.renderer.listen(this.element.nativeElement, 'touchmove', (touchMoveEvent) => {
                    this.onMousemove(touchMoveEvent, touchMoveEvent.targetTouches[0].clientX, touchMoveEvent.targetTouches[0].clientY);
                });
            }
            if (!this.eventListeners.mousemove) {
                this.eventListeners.mousemove = this.renderer.listen(this.element.nativeElement, 'mousemove', (mouseMoveEvent) => {
                    this.onMousemove(mouseMoveEvent, mouseMoveEvent.clientX, mouseMoveEvent.clientY);
                });
            }
            this.resizable.mousedown.next({
                clientX,
                clientY,
                edges: this.resizeEdges
            });
        });
    }
    /**
     * @hidden
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMouseup(clientX, clientY) {
        this.zone.runOutsideAngular(() => {
            this.unsubscribeEventListeners();
            this.resizable.mouseup.next({
                clientX,
                clientY,
                edges: this.resizeEdges
            });
        });
    }
    /**
     * @private
     * @param {?} event
     * @param {?} clientX
     * @param {?} clientY
     * @return {?}
     */
    onMousemove(event, clientX, clientY) {
        this.resizable.mousemove.next({
            clientX,
            clientY,
            edges: this.resizeEdges,
            event
        });
    }
    /**
     * @private
     * @return {?}
     */
    unsubscribeEventListeners() {
        Object.keys(this.eventListeners).forEach(type => {
            ((/** @type {?} */ (this))).eventListeners[type]();
            delete this.eventListeners[type];
        });
    }
}
ResizeHandleDirective.ɵfac = function ResizeHandleDirective_Factory(t) { return new (t || ResizeHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ResizableDirective)); };
ResizeHandleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: ResizeHandleDirective, selectors: [["", "mwlResizeHandle", ""]], hostBindings: function ResizeHandleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("touchstart", function ResizeHandleDirective_touchstart_HostBindingHandler($event) { return ctx.onMousedown($event, $event.touches[0].clientX, $event.touches[0].clientY); })("mousedown", function ResizeHandleDirective_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event, $event.clientX, $event.clientY); })("touchend", function ResizeHandleDirective_touchend_HostBindingHandler($event) { return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY); })("touchcancel", function ResizeHandleDirective_touchcancel_HostBindingHandler($event) { return ctx.onMouseup($event.changedTouches[0].clientX, $event.changedTouches[0].clientY); })("mouseup", function ResizeHandleDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event.clientX, $event.clientY); });
    } }, inputs: { resizeEdges: "resizeEdges" } });
/** @nocollapse */
ResizeHandleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
    { type: ResizableDirective }
];
ResizeHandleDirective.propDecorators = {
    resizeEdges: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    onMousedown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['touchstart', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY'
                ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mousedown', ['$event', '$event.clientX', '$event.clientY'],] }],
    onMouseup: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['touchend', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['touchcancel', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['mouseup', ['$event.clientX', '$event.clientY'],] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizeHandleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[mwlResizeHandle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }, { type: ResizableDirective }]; }, { resizeEdges: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], onMousedown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['touchstart', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY'
                ]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mousedown', ['$event', '$event.clientX', '$event.clientY']]
        }], onMouseup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['touchend', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['touchcancel', [
                    '$event.changedTouches[0].clientX',
                    '$event.changedTouches[0].clientY'
                ]]
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['mouseup', ['$event.clientX', '$event.clientY']]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ResizableModule {
}
ResizableModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ResizableModule });
ResizableModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ResizableModule_Factory(t) { return new (t || ResizableModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResizableModule, { declarations: [ResizableDirective,
        ResizeHandleDirective], exports: [ResizableDirective,
        ResizeHandleDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizableModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [ResizableDirective, ResizeHandleDirective],
                exports: [ResizableDirective, ResizeHandleDirective]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular-resizable-element.js.map

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home--container/home.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home--container/home.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component component--container\" id=\"home--container\">\n    <div class=\"component__wrapper\">\n        <app-home-sidebar (SELECT)=\"selectNode($event)\" class=\"wrapper__sidebar\"\n                          mwlResizable\n                          [treeNodes]=\"appStateFacade.selectNodes$ | async\"\n                          [resizeCursorPrecision]=\"6\"\n                          [enableGhostResize]=\"true\"\n                          [resizeEdges]=\"{bottom: false, right: true, top: false, left: false}\"\n        ></app-home-sidebar>\n        <div class=\"wrapper__body\" id=\"portal\"></div>\n        <app-home-iab [type]=\"homeIabTypeEnums.IFRAME\" [url]=\"'https://example.com'\" class=\"wrapper__iab\"\n            mwlResizable\n            [resizeCursorPrecision]=\"6\"\n            [enableGhostResize]=\"true\"\n            [resizeEdges]=\"{bottom: false, right: false, top: false, left: true}\"\n        ></app-home-iab>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-group/home-group.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-group/home-group.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("{{ (homeService.config$ | async)?.payload | json }}\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-iab/home-iab.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-iab/home-iab.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"home-iab\">\n    <div class=\"component__wrapper\">\n        <div class=\"wrapper__url-bar\">\n            <div class=\"url-bar__controls\">\n                <button class=\"controls__control-btn\" [disabled]=\"true\" (click)=\"back()\"><i class=\"tio-arrow_backward\"></i></button>\n                <button class=\"controls__control-btn\" [disabled]=\"true\" (click)=\"forward()\"><i class=\"tio-arrow_forward\"></i></button>\n                <button class=\"controls__control-btn\" (click)=\"refresh()\"><i class=\"tio-refresh\"></i></button>\n            </div>\n            <div class=\"url-bar__search-wrapper\">\n                <div class=\"search-wrapper__browser-url-field\">\n                    <div class=\"browser-url-field__secure-icon\">\n                        <i class=\"tio-lock\"></i>\n                    </div>\n                    <input class=\"browser-url-field__input\" (keyup.enter)=\"navigate(input.value)\" [value]=\"url\" #input>\n                </div>\n            </div>\n        </div>\n        <ng-container [ngSwitch]=\"type\">\n            <iframe *ngSwitchCase=\"typeEnums.IFRAME\"\n                    sandbox=\"allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation allow-modals\"\n                    class=\"wrapper__iframe\" #iframe></iframe>\n            <div\n                    *ngSwitchCase=\"typeEnums.HTML\"\n                    class=\"wrapper__html\"\n            ></div>\n        </ng-container>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node-config/home-node-config.component.html":
/*!***************************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node-config/home-node-config.component.html ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"home-node-config\">\n    {{ config | json }}\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.html":
/*!*****************************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.html ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("home-node-preview works!\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node/home-node.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node/home-node.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"home-node\">\n    <div class=\"component__wrapper\">\n        <app-tabs>\n            <app-tabs-tab\n                    [title]=\"'Config'\">\n                <app-home-node-config [config]=\"(homeService.config$ | async)?.payload\"></app-home-node-config>\n            </app-tabs-tab>\n            <app-tabs-tab\n                    [title]=\"'Aggregation'\">\n            </app-tabs-tab>\n            <app-tabs-tab\n                    [title]=\"'Preview'\">\n                <app-home-node-preview></app-home-node-preview>\n            </app-tabs-tab>\n        </app-tabs>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"home-sidebar\">\n    <div class=\"component__wrapper\">\n        <app-tree-view\n                (selectionChanged)=\"select($event)\"\n                [config]=\"treeViewConfig\"\n                [rootNodes]=\"treeNodes\"\n        ></app-tree-view>\n    </div>\n</div>\n");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"component\" id=\"tree-node\">\n    <div (click)=\"nodeClicked()\"\n         [ngClass]=\"{ 'component__wrapper--opaque': !selectionAllowed, 'component__wrapper--root': isRootNode, 'component__wrapper--clickable': nodeClickable && selectionAllowed, 'component__wrapper--selected': selected, 'component__wrapper--description': !isGroupNode}\"\n         class=\"component__wrapper\" [style.paddingLeft]=\"_paddingLeft + 'px'\">\n        <div [ngClass]=\"{'wrapper__controls--description': !isGroupNode}\" class=\"wrapper__controls\">\n            <i (click)=\"toggleChildren($event)\"\n               *ngIf=\"hasChildren && !unfolded\" class=\"controls__caret controls__caret--unfold tio-chevron_right\"></i>\n            <i (click)=\"toggleChildren($event)\" *ngIf=\"unfolded\"\n               class=\"controls__caret controls__caret--fold tio-chevron_down\"></i>\n        </div>\n        <div [ngClass]=\"{'wrapper__content--description': !isGroupNode, 'wrapper__content--selected': selected}\" class=\"wrapper__content\">\n            <div class=\"content__title\">\n                {{ node.title }}\n            </div>\n            <div *ngIf=\"!isGroupNode\" class=\"content__description\">\n                {{node.type}}\n            </div>\n        </div>\n        <div *ngIf=\"node.icon && !isGroupNode\" class=\"wrapper__icon\" [ngClass]=\"{'wrapper__icon--selected': selected}\">\n            <i [class]=\"node.icon\"></i>\n        </div>\n        <label class=\"wrapper__label\">\n            <input\n                    (click)=\"checkboxClicked($event)\"\n                    *ngIf=\"selectionEnabled\"\n                    [checked]=\"selected\"\n                    [disabled]=\"!selectionAllowed\"\n                    class=\"label__input\"\n                    name=\"radio\"\n                    type=\"radio\"\n            />\n        </label>\n    </div>\n\n</div>\n<div *ngIf=\"hasChildren && unfolded\"  class=\"component__children\">\n    <app-tree-node\n            (foldingChanged)=\"foldingChanged.emit($event)\"\n            (selectionChanged)=\"selectionChanged.emit($event)\"\n            *ngFor=\"let childNode of children\"\n            [config]=\"config\"\n            [node]=\"childNode\"\n            [path]=\"_path\"\n            [isRootNode]=\"isRootNode ? false : false\"\n            [paddingIncrease]=\"paddingIncrease\"\n            [paddingLeft]=\"_paddingLeft\"\n            [selectedNodes]=\"selectedNodes\"\n            [unfoldedNodes]=\"unfoldedNodes\"\n    ></app-tree-node>\n</div>");

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** /__w/harvester/harvester/node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tree-view-root\">\n    <app-tree-node\n            (foldingChanged)=\"updateUnfoldedNodes($event)\"\n            (selectionChanged)=\"updateSelectedNodes($event)\"\n            *ngFor=\"let node of rootNodes; trackBy: giveId\"\n            [config]=\"config\"\n            [node]=\"node\"\n            [paddingLeft]=\"0\"\n            [isRootNode]=\"true\"\n            [path]=\"'$$ROOT'\"\n            [paddingIncrease]=\"10\"\n            [selectedNodes]=\"selectedNodes\"\n            [unfoldedNodes]=\"unfoldedNodes\"\n    ></app-tree-node>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home--container/home.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home--container/home.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home--container .component__wrapper {\n  display: flex;\n  height: calc(100vh - 104px);\n}\n#home--container .component__wrapper .wrapper__sidebar {\n  display: block;\n  min-width: 272px;\n  box-sizing: border-box;\n  height: 100%;\n}\n#home--container .component__wrapper .wrapper__body {\n  flex-grow: 1;\n}\n#home--container .component__wrapper .wrapper__iab {\n  display: block;\n  box-sizing: border-box;\n  min-width: 495px;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9fX3cvaGFydmVzdGVyL2hhcnZlc3Rlci9hcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS0tY29udGFpbmVyL2hvbWUuY29tcG9uZW50LnNjc3MiLCJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS0tY29udGFpbmVyL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7QUNBSjtBREVJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQU47QURHSTtFQUNFLFlBQUE7QUNETjtBRElJO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDRk4iLCJmaWxlIjoiYXBwcy9oYXJ2ZXN0ZXIvc3JjL2FwcC9tb2R1bGVzL2ZlYXR1cmUvaG9tZS9jb21wb25lbnRzL2hvbWUtLWNvbnRhaW5lci9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2hvbWUtLWNvbnRhaW5lciB7XG4gIC5jb21wb25lbnRfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xuXG4gICAgLndyYXBwZXJfX3NpZGViYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtaW4td2lkdGg6IDI3MnB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAud3JhcHBlcl9fYm9keSB7XG4gICAgICBmbGV4LWdyb3c6IDE7XG4gICAgfVxuXG4gICAgLndyYXBwZXJfX2lhYiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBtaW4td2lkdGg6IDQ5NXB4O1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiI2hvbWUtLWNvbnRhaW5lciAuY29tcG9uZW50X193cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xufVxuI2hvbWUtLWNvbnRhaW5lciAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX19zaWRlYmFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1pbi13aWR0aDogMjcycHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNob21lLS1jb250YWluZXIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fYm9keSB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiNob21lLS1jb250YWluZXIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9faWFiIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1pbi13aWR0aDogNDk1cHg7XG4gIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home--container/home.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home--container/home.component.ts ***!
  \***********************************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/auth/auth.service */ "./src/app/services/auth/auth.service.ts");
/* harmony import */ var _services_pwa_pwa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../services/pwa/pwa.service */ "./src/app/services/pwa/pwa.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_error_error_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/error/error.service */ "./src/app/services/error/error.service.ts");
/* harmony import */ var _home_state_facade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../home-state.facade */ "./src/app/modules/feature/home/home-state.facade.ts");
/* harmony import */ var _enums_color_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../enums/color.enums */ "./src/app/enums/color.enums.ts");
/* harmony import */ var _services_home_home_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/home/home.service */ "./src/app/modules/feature/home/services/home/home.service.ts");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _shared_tree_view_enums_tree_node_enum__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/tree-view/enums/tree-node.enum */ "./src/app/modules/shared/tree-view/enums/tree-node.enum.ts");
/* harmony import */ var _enums_home_iab_enum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../enums/home-iab.enum */ "./src/app/modules/feature/home/enums/home-iab.enum.ts");
/* harmony import */ var _home_group_home_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home-group/home-group.component */ "./src/app/modules/feature/home/components/home-group/home-group.component.ts");
/* harmony import */ var _home_node_home_node_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../home-node/home-node.component */ "./src/app/modules/feature/home/components/home-node/home-node.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_tree_view_utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../shared/tree-view/utils/tree-node.utils */ "./src/app/modules/shared/tree-view/utils/tree-node.utils.ts");
/* harmony import */ var _app_state_facade__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../app-state.facade */ "./src/app/app-state.facade.ts");

















let HomeComponent = 
/**
 * Home Component
 */
class HomeComponent {
    constructor(authService, pwaService, router, errorService, homeService, componentFactoryResolver, injector, appRef, homeStateFacade, appStateFacade, treeNodeUtils) {
        this.authService = authService;
        this.pwaService = pwaService;
        this.router = router;
        this.errorService = errorService;
        this.homeService = homeService;
        this.componentFactoryResolver = componentFactoryResolver;
        this.injector = injector;
        this.appRef = appRef;
        this.homeStateFacade = homeStateFacade;
        this.appStateFacade = appStateFacade;
        this.treeNodeUtils = treeNodeUtils;
        this.colorEnums = _enums_color_enums__WEBPACK_IMPORTED_MODULE_7__["colorEnums"];
        this.treeNodeTypeEnums = _shared_tree_view_enums_tree_node_enum__WEBPACK_IMPORTED_MODULE_10__["typeEnums"];
        this.homeIabTypeEnums = _enums_home_iab_enum__WEBPACK_IMPORTED_MODULE_11__["typeEnums"];
        this.homeSidebarState = this.homeStateFacade.selectHomeSidebarState$;
        this.homeState = this.homeStateFacade.selectHomeState$;
    }
    ngOnInit() {
        this.appStateFacade.loadAppNodes();
        // FIXME: [NOASSIGN] Not unwrapping this Observable causes the Observable to never end
        this.pwaService.isAvailable(true)
            .subscribe(res => {
            this.showInstallButton = res;
        });
        this.appStateFacade.selectSelectedNodes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["filter"])((selectedTreeNodes) => selectedTreeNodes.length > 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["withLatestFrom"])(this.appStateFacade.selectNodes$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["distinctUntilChanged"])((a, b) => JSON.stringify(a) === JSON.stringify(b)))
            .subscribe(([selectedTreeNodes, treeNodes]) => {
            const resolvedTreeNodes = this.treeNodeUtils.findNodesDeep(treeNodes, selectedTreeNodes[0].split('.'));
            this.homeService.open({
                component: resolvedTreeNodes[resolvedTreeNodes.length - 1].type === this.treeNodeTypeEnums.NODE_GROUP ? _home_group_home_group_component__WEBPACK_IMPORTED_MODULE_12__["HomeGroupComponent"] : _home_node_home_node_component__WEBPACK_IMPORTED_MODULE_13__["HomeNodeComponent"],
                payload: resolvedTreeNodes[resolvedTreeNodes.length - 1]
            }).subscribe();
        });
    }
    ngAfterViewInit() {
        this.portalHost = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["DomPortalHost"](document.querySelector('#portal'), this.componentFactoryResolver, this.appRef, this.injector);
        this.homeService.config$.subscribe((config) => {
            try {
                this.portalHost.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__["ComponentPortal"](config.component));
            }
            catch (err) {
                console.log(err);
            }
        }, err => {
            throw err;
        });
        this.homeService.visible$.subscribe((visibility) => {
            if (!visibility) {
                this.portalHost.detach();
            }
        }, err => {
            throw err;
        });
    }
    selectNode(event) {
        this.appStateFacade.selectAppNode(event);
    }
    /**
     * Opens Native PWA Install Prompt
     */
    installPwa() {
        this.pwaService.install();
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_pwa_pwa_service__WEBPACK_IMPORTED_MODULE_3__["PwaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"] },
    { type: _services_home_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"] },
    { type: _home_state_facade__WEBPACK_IMPORTED_MODULE_6__["HomeStateFacade"] },
    { type: _app_state_facade__WEBPACK_IMPORTED_MODULE_16__["AppStateFacade"] },
    { type: _shared_tree_view_utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_15__["TreeNodeUtils"] }
];
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home--container/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.scss */ "./src/app/modules/feature/home/components/home--container/home.component.scss")).default]
    })
    /**
     * Home Component
     */
    ,
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        _services_pwa_pwa_service__WEBPACK_IMPORTED_MODULE_3__["PwaService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _services_error_error_service__WEBPACK_IMPORTED_MODULE_5__["ErrorService"],
        _services_home_home_service__WEBPACK_IMPORTED_MODULE_8__["HomeService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"],
        _home_state_facade__WEBPACK_IMPORTED_MODULE_6__["HomeStateFacade"],
        _app_state_facade__WEBPACK_IMPORTED_MODULE_16__["AppStateFacade"],
        _shared_tree_view_utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_15__["TreeNodeUtils"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/feature/home/components/home-group/home-group.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-group/home-group.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1ncm91cC9ob21lLWdyb3VwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home-group/home-group.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-group/home-group.component.ts ***!
  \************************************************************************************/
/*! exports provided: HomeGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGroupComponent", function() { return HomeGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_home_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home/home.service */ "./src/app/modules/feature/home/services/home/home.service.ts");



let HomeGroupComponent = class HomeGroupComponent {
    constructor(homeService) {
        this.homeService = homeService;
    }
    ngOnInit() {
    }
};
HomeGroupComponent.ctorParameters = () => [
    { type: _services_home_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
HomeGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-group',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-group.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-group/home-group.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-group.component.scss */ "./src/app/modules/feature/home/components/home-group/home-group.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_home_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
], HomeGroupComponent);



/***/ }),

/***/ "./src/app/modules/feature/home/components/home-iab/home-iab.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-iab/home-iab.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home-iab {\n  height: 100%;\n}\n#home-iab .component__wrapper {\n  background: #fff;\n  height: 100%;\n  position: relative;\n}\n#home-iab .component__wrapper .wrapper__url-bar {\n  vertical-align: baseline;\n  text-overflow: ellipsis;\n  background: #0F1119;\n  z-index: 1;\n  padding: 5px 7px;\n  display: flex;\n  border-bottom: 1px solid #191b22;\n  position: relative;\n  box-shadow: -1px 1px 2px rgba(13, 15, 23, 0.26);\n  border-left: 1px solid #191b22;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__controls {\n  display: flex;\n  padding-right: 7px;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__controls .controls__control-btn {\n  margin: 0;\n  overflow: visible;\n  text-transform: none;\n  -webkit-appearance: button;\n  font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n  outline: none;\n  cursor: default !important;\n  background: transparent;\n  transition: all 0.2s ease-in-out;\n  padding: 0 2px;\n  display: flex;\n  color: #d3d3d3;\n  font-size: 21px;\n  border-radius: 2px;\n  border: 2px solid transparent;\n  box-sizing: border-box;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__controls .controls__control-btn:hover {\n  border-radius: 2px;\n  border: 2px solid transparent;\n  background: #1A1C23;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__controls .controls__control-btn:disabled {\n  pointer-events: none;\n  color: #626262;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__search-wrapper {\n  flex-grow: 1;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__search-wrapper .search-wrapper__browser-url-field {\n  vertical-align: baseline;\n  text-overflow: ellipsis;\n  background: #1A1C23;\n  border: 1px solid #1A1C23;\n  border-radius: 2px;\n  font-size: 14px;\n  font-weight: 400;\n  height: 25px;\n  overflow: hidden;\n  display: flex;\n  width: 100%;\n  min-width: 50px;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__search-wrapper .search-wrapper__browser-url-field .browser-url-field__secure-icon {\n  padding: 3px 4px;\n  height: 19px;\n  font-size: 16px;\n  color: #4fcf89;\n}\n#home-iab .component__wrapper .wrapper__url-bar .url-bar__search-wrapper .search-wrapper__browser-url-field .browser-url-field__input {\n  flex-grow: 1;\n  border: none;\n  font-size: 14px;\n  background: none;\n  color: #ffffff;\n  outline: none;\n}\n#home-iab .component__wrapper .wrapper__iframe {\n  background: #11131b;\n  width: 100%;\n  height: calc(100% - 38px);\n  border: none;\n  position: absolute;\n  border-left: 1px solid #191b22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9fX3cvaGFydmVzdGVyL2hhcnZlc3Rlci9hcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1pYWIvaG9tZS1pYWIuY29tcG9uZW50LnNjc3MiLCJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1pYWIvaG9tZS1pYWIuY29tcG9uZW50LnNjc3MiLCIvX193L2hhcnZlc3Rlci9oYXJ2ZXN0ZXIvYXBwcy9oYXJ2ZXN0ZXIvc3JjL2Fzc2V0cy9zY3NzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FDREY7QURHRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDREo7QURHSTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkVYWTtFRllaLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSw4QkFBQTtBQ0ROO0FER007RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUNEUjtBREdRO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtFQUNBLHVEQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7QUNEVjtBREdVO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FDRFo7QURJVTtFQUNFLG9CQUFBO0VBQ0EsY0FBQTtBQ0ZaO0FET007RUFDRSxZQUFBO0FDTFI7QURNUTtFQUNFLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNKVjtBRE1VO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNFNUVPO0FEd0VuQjtBRE9VO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRTlFTTtFRitFTixhQUFBO0FDTFo7QURXSTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7QUNUTiIsImZpbGUiOiJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1pYWIvaG9tZS1pYWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcic7XG5cbiNob21lLWlhYiB7XG4gIGhlaWdodDogMTAwJTtcblxuICAuY29tcG9uZW50X193cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAud3JhcHBlcl9fdXJsLWJhciB7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIGJhY2tncm91bmQ6ICRjb2xvci0tdGVydGlhcnk7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbWl4KHdoaXRlLCAkY29sb3ItLXRlcnRpYXJ5LCA0JSk7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBib3gtc2hhZG93OiAtMXB4IDFweCAycHggcmdiYSgxMywgMTUsIDIzLCAwLjI2KTtcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgbWl4KHdoaXRlLCAkY29sb3ItLXRlcnRpYXJ5LCA0JSk7XG5cbiAgICAgIC51cmwtYmFyX19jb250cm9scyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDdweDtcblxuICAgICAgICAuY29udHJvbHNfX2NvbnRyb2wtYnRuIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCAnSGVsdmV0aWNhJywgJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGN1cnNvcjogZGVmYXVsdCAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMnB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgY29sb3I6ICNkM2QzZDM7XG4gICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxQTFDMjM7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNjI2MjYyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudXJsLWJhcl9fc2VhcmNoLXdyYXBwZXIge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICAgIC5zZWFyY2gtd3JhcHBlcl9fYnJvd3Nlci11cmwtZmllbGQge1xuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUExQzIzO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxQTFDMjM7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xuXG4gICAgICAgICAgLmJyb3dzZXItdXJsLWZpZWxkX19zZWN1cmUtaWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxOXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICRjb2xvci0tc2Vjb25kYXJ5O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5icm93c2VyLXVybC1maWVsZF9faW5wdXQge1xuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItLW9jdG9uYXJ5O1xuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAud3JhcHBlcl9faWZyYW1lIHtcbiAgICAgIGJhY2tncm91bmQ6IG1peCh3aGl0ZSwgJGNvbG9yLS10ZXJ0aWFyeSwgMSUpO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM4cHgpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBtaXgod2hpdGUsICRjb2xvci0tdGVydGlhcnksIDQlKTtcbiAgICB9XG4gIH1cbn1cbiIsIiNob21lLWlhYiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNob21lLWlhYiAuY29tcG9uZW50X193cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jaG9tZS1pYWIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fdXJsLWJhciB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGJhY2tncm91bmQ6ICMwRjExMTk7XG4gIHotaW5kZXg6IDE7XG4gIHBhZGRpbmc6IDVweCA3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMTkxYjIyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IC0xcHggMXB4IDJweCByZ2JhKDEzLCAxNSwgMjMsIDAuMjYpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxOTFiMjI7XG59XG4jaG9tZS1pYWIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fdXJsLWJhciAudXJsLWJhcl9fY29udHJvbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXJpZ2h0OiA3cHg7XG59XG4jaG9tZS1pYWIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fdXJsLWJhciAudXJsLWJhcl9fY29udHJvbHMgLmNvbnRyb2xzX19jb250cm9sLWJ0biB7XG4gIG1hcmdpbjogMDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIFwiSGVsdmV0aWNhXCIsIFwiQXJpYWxcIiwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogMCAycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjZDNkM2QzO1xuICBmb250LXNpemU6IDIxcHg7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4jaG9tZS1pYWIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fdXJsLWJhciAudXJsLWJhcl9fY29udHJvbHMgLmNvbnRyb2xzX19jb250cm9sLWJ0bjpob3ZlciB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQ6ICMxQTFDMjM7XG59XG4jaG9tZS1pYWIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fdXJsLWJhciAudXJsLWJhcl9fY29udHJvbHMgLmNvbnRyb2xzX19jb250cm9sLWJ0bjpkaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBjb2xvcjogIzYyNjI2Mjtcbn1cbiNob21lLWlhYiAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX191cmwtYmFyIC51cmwtYmFyX19zZWFyY2gtd3JhcHBlciB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbiNob21lLWlhYiAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX191cmwtYmFyIC51cmwtYmFyX19zZWFyY2gtd3JhcHBlciAuc2VhcmNoLXdyYXBwZXJfX2Jyb3dzZXItdXJsLWZpZWxkIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgYmFja2dyb3VuZDogIzFBMUMyMztcbiAgYm9yZGVyOiAxcHggc29saWQgIzFBMUMyMztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGhlaWdodDogMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbiNob21lLWlhYiAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX191cmwtYmFyIC51cmwtYmFyX19zZWFyY2gtd3JhcHBlciAuc2VhcmNoLXdyYXBwZXJfX2Jyb3dzZXItdXJsLWZpZWxkIC5icm93c2VyLXVybC1maWVsZF9fc2VjdXJlLWljb24ge1xuICBwYWRkaW5nOiAzcHggNHB4O1xuICBoZWlnaHQ6IDE5cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM0ZmNmODk7XG59XG4jaG9tZS1pYWIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fdXJsLWJhciAudXJsLWJhcl9fc2VhcmNoLXdyYXBwZXIgLnNlYXJjaC13cmFwcGVyX19icm93c2VyLXVybC1maWVsZCAuYnJvd3Nlci11cmwtZmllbGRfX2lucHV0IHtcbiAgZmxleC1ncm93OiAxO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4jaG9tZS1pYWIgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9faWZyYW1lIHtcbiAgYmFja2dyb3VuZDogIzExMTMxYjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMzhweCk7XG4gIGJvcmRlcjogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMxOTFiMjI7XG59IiwiJGNvbG9yLS1wcmltYXJ5OiAjQ0EzNTc3O1xuJGNvbG9yLS1zZWNvbmRhcnk6ICM0ZmNmODk7XG4kY29sb3ItLXRlcnRpYXJ5OiAjMEYxMTE5O1xuJGNvbG9yLS1xdWF0ZXJuYXJ5OiAjZWFkZTRjO1xuJGNvbG9yLS1xdWluYXJ5OiAjOTE5MTkxO1xuJGNvbG9yLS1zZW5hcnk6ICM0Y2VhZTQ7XG4kY29sb3ItLXNlcHRlbmFyeTogIzAwMDAwMDtcbiRjb2xvci0tb2N0b25hcnk6ICNmZmZmZmY7XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home-iab/home-iab.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-iab/home-iab.component.ts ***!
  \********************************************************************************/
/*! exports provided: HomeIabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeIabComponent", function() { return HomeIabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_home_iab_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/home-iab.enum */ "./src/app/modules/feature/home/enums/home-iab.enum.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _enums_color_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../enums/color.enums */ "./src/app/enums/color.enums.ts");





let HomeIabComponent = class HomeIabComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.selection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.typeEnums = _enums_home_iab_enum__WEBPACK_IMPORTED_MODULE_2__["typeEnums"];
        this.colorEnums = _enums_color_enums__WEBPACK_IMPORTED_MODULE_4__["colorEnums"];
        this.alive = true;
    }
    ngAfterViewInit() {
        this.iframe.nativeElement.src = this.url;
    }
    refresh() {
        this.iframe.nativeElement.contentWindow.location.reload();
    }
    navigate(url) {
        this.iframe.nativeElement.src = url;
    }
    back() {
        this.iframe.nativeElement.contentWindow.location.back();
    }
    forward() {
        this.iframe.nativeElement.contentWindow.location.forward();
    }
    ngOnDestroy() {
        this.alive = false;
    }
};
HomeIabComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('iframe', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomeIabComponent.prototype, "iframe", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HomeIabComponent.prototype, "type", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], HomeIabComponent.prototype, "url", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], HomeIabComponent.prototype, "selection", void 0);
HomeIabComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-iab',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-iab.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-iab/home-iab.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-iab.component.scss */ "./src/app/modules/feature/home/components/home-iab/home-iab.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
], HomeIabComponent);



/***/ }),

/***/ "./src/app/modules/feature/home/components/home-node-config/home-node-config.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-node-config/home-node-config.component.scss ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".component--container {\n  position: relative;\n}\n\n#home-node-config {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9fX3cvaGFydmVzdGVyL2hhcnZlc3Rlci9hcHBzL2hhcnZlc3Rlci9zcmMvYXNzZXRzL3Njc3MvY29tcG9uZW50LnNjc3MiLCJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1ub2RlLWNvbmZpZy9ob21lLW5vZGUtY29uZmlnLmNvbXBvbmVudC5zY3NzIiwiL19fdy9oYXJ2ZXN0ZXIvaGFydmVzdGVyL2FwcHMvaGFydmVzdGVyL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlL2hvbWUvY29tcG9uZW50cy9ob21lLW5vZGUtY29uZmlnL2hvbWUtbm9kZS1jb25maWcuY29tcG9uZW50LnNjc3MiLCIvX193L2hhcnZlc3Rlci9oYXJ2ZXN0ZXIvYXBwcy9oYXJ2ZXN0ZXIvc3JjL2Fzc2V0cy9zY3NzL2NvbG9yLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQ0FKOztBQ0NBO0VBQ0UsY0NHZ0I7QUZEbEIiLCJmaWxlIjoiYXBwcy9oYXJ2ZXN0ZXIvc3JjL2FwcC9tb2R1bGVzL2ZlYXR1cmUvaG9tZS9jb21wb25lbnRzL2hvbWUtbm9kZS1jb25maWcvaG9tZS1ub2RlLWNvbmZpZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnQge1xuICAmLS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxufVxuIiwiLmNvbXBvbmVudC0tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4jaG9tZS1ub2RlLWNvbmZpZyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcbkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbXBvbmVudCc7XG5cbiNob21lLW5vZGUtY29uZmlnIHtcbiAgY29sb3I6ICRjb2xvci0tb2N0b25hcnk7XG59IiwiJGNvbG9yLS1wcmltYXJ5OiAjQ0EzNTc3O1xuJGNvbG9yLS1zZWNvbmRhcnk6ICM0ZmNmODk7XG4kY29sb3ItLXRlcnRpYXJ5OiAjMEYxMTE5O1xuJGNvbG9yLS1xdWF0ZXJuYXJ5OiAjZWFkZTRjO1xuJGNvbG9yLS1xdWluYXJ5OiAjOTE5MTkxO1xuJGNvbG9yLS1zZW5hcnk6ICM0Y2VhZTQ7XG4kY29sb3ItLXNlcHRlbmFyeTogIzAwMDAwMDtcbiRjb2xvci0tb2N0b25hcnk6ICNmZmZmZmY7XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home-node-config/home-node-config.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-node-config/home-node-config.component.ts ***!
  \************************************************************************************************/
/*! exports provided: HomeNodeConfigComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNodeConfigComponent", function() { return HomeNodeConfigComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeNodeConfigComponent = class HomeNodeConfigComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HomeNodeConfigComponent.prototype, "config", void 0);
HomeNodeConfigComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-node-config',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-node-config.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node-config/home-node-config.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-node-config.component.scss */ "./src/app/modules/feature/home/components/home-node-config/home-node-config.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeNodeConfigComponent);



/***/ }),

/***/ "./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1ub2RlLXByZXZpZXcvaG9tZS1ub2RlLXByZXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: HomeNodePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNodePreviewComponent", function() { return HomeNodePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeNodePreviewComponent = class HomeNodePreviewComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
HomeNodePreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-node-preview',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-node-preview.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-node-preview.component.scss */ "./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeNodePreviewComponent);



/***/ }),

/***/ "./src/app/modules/feature/home/components/home-node/home-node.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-node/home-node.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1ub2RlL2hvbWUtbm9kZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home-node/home-node.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-node/home-node.component.ts ***!
  \**********************************************************************************/
/*! exports provided: HomeNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNodeComponent", function() { return HomeNodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_home_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/home/home.service */ "./src/app/modules/feature/home/services/home/home.service.ts");



let HomeNodeComponent = class HomeNodeComponent {
    constructor(homeService) {
        this.homeService = homeService;
    }
    ngOnInit() {
    }
};
HomeNodeComponent.ctorParameters = () => [
    { type: _services_home_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] }
];
HomeNodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-node',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-node.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-node/home-node.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-node.component.scss */ "./src/app/modules/feature/home/components/home-node/home-node.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_home_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
], HomeNodeComponent);



/***/ }),

/***/ "./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#home-sidebar {\n  height: 100%;\n}\n#home-sidebar .component__wrapper {\n  height: 100%;\n  background: #0F1119;\n  box-shadow: 1px 0 28px rgba(9, 10, 14, 0.31);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9fX3cvaGFydmVzdGVyL2hhcnZlc3Rlci9hcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvZmVhdHVyZS9ob21lL2NvbXBvbmVudHMvaG9tZS1zaWRlYmFyL2hvbWUtc2lkZWJhci5jb21wb25lbnQuc2NzcyIsImFwcHMvaGFydmVzdGVyL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlL2hvbWUvY29tcG9uZW50cy9ob21lLXNpZGViYXIvaG9tZS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwiL19fdy9oYXJ2ZXN0ZXIvaGFydmVzdGVyL2FwcHMvaGFydmVzdGVyL3NyYy9hc3NldHMvc2Nzcy9jb2xvci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsWUFBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0EsbUJFTGM7RUZNZCw0Q0FBQTtBQ0RKIiwiZmlsZSI6ImFwcHMvaGFydmVzdGVyL3NyYy9hcHAvbW9kdWxlcy9mZWF0dXJlL2hvbWUvY29tcG9uZW50cy9ob21lLXNpZGViYXIvaG9tZS1zaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3InO1xuXG4jaG9tZS1zaWRlYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuXG4gIC5jb21wb25lbnRfX3dyYXBwZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkY29sb3ItLXRlcnRpYXJ5O1xuICAgIGJveC1zaGFkb3c6IDFweCAwIDI4cHggcmdiYSg5LCAxMCwgMTQsIDAuMzEpXG4gIH1cbn1cbiIsIiNob21lLXNpZGViYXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jaG9tZS1zaWRlYmFyIC5jb21wb25lbnRfX3dyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICMwRjExMTk7XG4gIGJveC1zaGFkb3c6IDFweCAwIDI4cHggcmdiYSg5LCAxMCwgMTQsIDAuMzEpO1xufSIsIiRjb2xvci0tcHJpbWFyeTogI0NBMzU3NztcbiRjb2xvci0tc2Vjb25kYXJ5OiAjNGZjZjg5O1xuJGNvbG9yLS10ZXJ0aWFyeTogIzBGMTExOTtcbiRjb2xvci0tcXVhdGVybmFyeTogI2VhZGU0YztcbiRjb2xvci0tcXVpbmFyeTogIzkxOTE5MTtcbiRjb2xvci0tc2VuYXJ5OiAjNGNlYWU0O1xuJGNvbG9yLS1zZXB0ZW5hcnk6ICMwMDAwMDA7XG4kY29sb3ItLW9jdG9uYXJ5OiAjZmZmZmZmO1xuIl19 */");

/***/ }),

/***/ "./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.ts ***!
  \****************************************************************************************/
/*! exports provided: HomeSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSidebarComponent", function() { return HomeSidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeSidebarComponent = class HomeSidebarComponent {
    constructor() {
        this.SELECT = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.treeViewConfig = { selection: { enabled: true, nodeClickable: true } };
    }
    ngOnInit() {
    }
    select(event) {
        this.SELECT.emit(event);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], HomeSidebarComponent.prototype, "SELECT", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], HomeSidebarComponent.prototype, "treeNodes", void 0);
HomeSidebarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-sidebar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home-sidebar.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home-sidebar.component.scss */ "./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeSidebarComponent);



/***/ }),

/***/ "./src/app/modules/feature/home/enums/home-iab.enum.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/feature/home/enums/home-iab.enum.ts ***!
  \*************************************************************/
/*! exports provided: typeEnums */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeEnums", function() { return typeEnums; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");

var typeEnums;
(function (typeEnums) {
    typeEnums["HTML"] = "HTML";
    typeEnums["IFRAME"] = "IFRAME";
})(typeEnums || (typeEnums = {}));


/***/ }),

/***/ "./src/app/modules/feature/home/home-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/feature/home/home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_home_container_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home--container/home.component */ "./src/app/modules/feature/home/components/home--container/home.component.ts");




const routes = [
    { path: '', component: _components_home_container_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/feature/home/home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/feature/home/home.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/feature/home/home-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_hook_hook_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/hook/hook.module */ "./src/app/modules/shared/hook/hook.module.ts");
/* harmony import */ var _components_home_container_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home--container/home.component */ "./src/app/modules/feature/home/components/home--container/home.component.ts");
/* harmony import */ var _shared_button_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/button/button.module */ "./src/app/modules/shared/button/button.module.ts");
/* harmony import */ var _components_home_sidebar_home_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home-sidebar/home-sidebar.component */ "./src/app/modules/feature/home/components/home-sidebar/home-sidebar.component.ts");
/* harmony import */ var _shared_tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/tree-view/tree-view.module */ "./src/app/modules/shared/tree-view/tree-view.module.ts");
/* harmony import */ var _components_home_node_home_node_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home-node/home-node.component */ "./src/app/modules/feature/home/components/home-node/home-node.component.ts");
/* harmony import */ var _services_home_home_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/home/home.service */ "./src/app/modules/feature/home/services/home/home.service.ts");
/* harmony import */ var _shared_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/tabs/tabs.module */ "./src/app/modules/shared/tabs/tabs.module.ts");
/* harmony import */ var _components_home_node_config_home_node_config_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-node-config/home-node-config.component */ "./src/app/modules/feature/home/components/home-node-config/home-node-config.component.ts");
/* harmony import */ var _components_home_node_preview_home_node_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home-node-preview/home-node-preview.component */ "./src/app/modules/feature/home/components/home-node-preview/home-node-preview.component.ts");
/* harmony import */ var _components_home_group_home_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/home-group/home-group.component */ "./src/app/modules/feature/home/components/home-group/home-group.component.ts");
/* harmony import */ var _home_state_facade__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home-state.facade */ "./src/app/modules/feature/home/home-state.facade.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngrx/store */ "../../node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/reducers */ "./src/app/modules/feature/home/store/reducers/index.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/effects */ "../../node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/effects */ "./src/app/modules/feature/home/store/effects/index.ts");
/* harmony import */ var _components_home_iab_home_iab_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/home-iab/home-iab.component */ "./src/app/modules/feature/home/components/home-iab/home-iab.component.ts");
/* harmony import */ var angular_resizable_element__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-resizable-element */ "../../node_modules/angular-resizable-element/__ivy_ngcc__/fesm2015/angular-resizable-element.js");
/* harmony import */ var _shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/i18n/i18n.module */ "./src/app/modules/shared/i18n/i18n.module.ts");
























let HomeModule = class HomeModule {
};
HomeModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_home_container_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_home_sidebar_home_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["HomeSidebarComponent"],
            _components_home_node_home_node_component__WEBPACK_IMPORTED_MODULE_10__["HomeNodeComponent"],
            _components_home_node_config_home_node_config_component__WEBPACK_IMPORTED_MODULE_13__["HomeNodeConfigComponent"],
            _components_home_node_preview_home_node_preview_component__WEBPACK_IMPORTED_MODULE_14__["HomeNodePreviewComponent"],
            _components_home_group_home_group_component__WEBPACK_IMPORTED_MODULE_15__["HomeGroupComponent"],
            _components_home_iab_home_iab_component__WEBPACK_IMPORTED_MODULE_21__["HomeIabComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _shared_hook_hook_module__WEBPACK_IMPORTED_MODULE_5__["HookModule"],
            _shared_button_button_module__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_tree_view_tree_view_module__WEBPACK_IMPORTED_MODULE_9__["TreeViewModule"],
            _shared_tabs_tabs_module__WEBPACK_IMPORTED_MODULE_12__["TabsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forFeature('HOME_STATE', _store_reducers__WEBPACK_IMPORTED_MODULE_18__["homeReducers"]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_17__["StoreModule"].forFeature('HOME_SIDEBAR_STATE', _store_reducers__WEBPACK_IMPORTED_MODULE_18__["homeSidebarReducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_19__["EffectsModule"].forFeature([_store_effects__WEBPACK_IMPORTED_MODULE_20__["HomeEffects"], _store_effects__WEBPACK_IMPORTED_MODULE_20__["HomeSidebarEffects"]]),
            angular_resizable_element__WEBPACK_IMPORTED_MODULE_22__["ResizableModule"],
            _shared_i18n_i18n_module__WEBPACK_IMPORTED_MODULE_23__["I18nModule"]
        ],
        providers: [
            _services_home_home_service__WEBPACK_IMPORTED_MODULE_11__["HomeService"],
            _home_state_facade__WEBPACK_IMPORTED_MODULE_16__["HomeStateFacade"],
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/feature/home/services/home/home.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/feature/home/services/home/home.service.ts ***!
  \********************************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let HomeService = 
/**
 * HomeService
 */
class HomeService {
    constructor() {
        this.configSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this.visibleSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.clickSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    get click$() {
        return this.clickSubject$;
    }
    get visible$() {
        return this.visibleSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((visibility) => visibility));
    }
    get config$() {
        return this.configSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipWhile"])(value => value === undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((config) => config));
    }
    open(config) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"]((observer) => {
            this.close(); // Dispose previous portal
            this.configSubject$.next(config);
            this.visibleSubject$.next(true);
            this.click$.subscribe((id) => observer.next(id), err => {
                throw err;
            });
        });
    }
    close() {
        this.visibleSubject$.next(false);
    }
};
HomeService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    /**
     * HomeService
     */
    ,
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeService);



/***/ }),

/***/ "./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#tree-node .component__wrapper {\n  display: flex;\n  color: #919191;\n}\n#tree-node .component__wrapper--selected {\n  background: #1d1f27;\n}\n#tree-node .component__wrapper--root .wrapper__content .content__title {\n  color: #80CBC4 !important;\n  font-weight: 600;\n}\n#tree-node .component__wrapper--opaque {\n  opacity: 0.5;\n}\n#tree-node .component__wrapper .wrapper__controls {\n  padding: 2px 7px;\n  height: 24px;\n  width: 20px;\n}\n#tree-node .component__wrapper .wrapper__controls--description {\n  padding: 9px 2px;\n}\n#tree-node .component__wrapper .wrapper__controls .controls__caret {\n  color: inherit;\n  font-size: 23px;\n}\n#tree-node .component__wrapper .wrapper__content {\n  padding: 4px 6px;\n}\n#tree-node .component__wrapper .wrapper__content--description .content__title {\n  font-size: 13px;\n  color: #b2b2b2 !important;\n}\n#tree-node .component__wrapper .wrapper__content--description .content__description {\n  text-transform: uppercase;\n  font-size: 11px;\n  color: #666666;\n}\n#tree-node .component__wrapper .wrapper__content--selected .content__title {\n  color: #ffffff;\n}\n#tree-node .component__wrapper .wrapper__content .content__title {\n  font-size: 13px;\n  color: #919191;\n}\n#tree-node .component__wrapper .wrapper__label .label__input {\n  display: none;\n}\n#tree-node .component__wrapper .wrapper__icon {\n  color: #666666;\n  font-size: 23px;\n  padding: 7px 10px;\n  height: 28px;\n  margin-left: auto;\n  transition: all 100ms ease-in;\n}\n#tree-node .component__wrapper .wrapper__icon--selected {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9fX3cvaGFydmVzdGVyL2hhcnZlc3Rlci9hcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL3RyZWUtdmlldy9jb21wb25lbnRzL3RyZWUtbm9kZS90cmVlLW5vZGUuY29tcG9uZW50LnNjc3MiLCIvX193L2hhcnZlc3Rlci9oYXJ2ZXN0ZXIvYXBwcy9oYXJ2ZXN0ZXIvc3JjL2Fzc2V0cy9zY3NzL2NvbG9yLnNjc3MiLCJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL3RyZWUtdmlldy9jb21wb25lbnRzL3RyZWUtbm9kZS90cmVlLW5vZGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0U7RUFDRSxhQUFBO0VBQ0EsY0NIYTtBQ0RqQjtBRk1JO0VBQ0UsbUJBQUE7QUVKTjtBRlNRO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBRVBWO0FGZUk7RUFDRSxZQUFBO0FFYk47QUZtQkk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FFakJOO0FGbUJNO0VBQ0UsZ0JBQUE7QUVqQlI7QUZvQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtBRWxCUjtBRjhCSTtFQUNFLGdCQUFBO0FFNUJOO0FGK0JRO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FFN0JWO0FGZ0NRO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBRTlCVjtBRm1DUTtFQUNFLGNDbEVRO0FDaUNsQjtBRnFDTTtFQUNFLGVBQUE7RUFDQSxjQzNFUztBQ3dDakI7QUZ3Q007RUFDRSxhQUFBO0FFdENSO0FGMENJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0FFeENOO0FGMENNO0VBQ0UsY0MzRlU7QUNtRGxCIiwiZmlsZSI6ImFwcHMvaGFydmVzdGVyL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvdHJlZS12aWV3L2NvbXBvbmVudHMvdHJlZS1ub2RlL3RyZWUtbm9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yJztcblxuJGJsb2NrLXNwYWNpbmc6IDZweDtcblxuI3RyZWUtbm9kZSB7XG4gIC5jb21wb25lbnRfX3dyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICRjb2xvci0tcXVpbmFyeTtcblxuICAgICYtLXNlbGVjdGVkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1peCh3aGl0ZSwgJGNvbG9yLS10ZXJ0aWFyeSwgNiUpO1xuICAgIH1cblxuICAgICYtLXJvb3Qge1xuICAgICAgLndyYXBwZXJfX2NvbnRlbnQge1xuICAgICAgICAuY29udGVudF9fdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAjODBDQkM0ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICYtLWRlc2NyaXB0aW9uIHtcbiAgICB9XG5cbiAgICAmLS1vcGFxdWUge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cblxuICAgICYtLWNsaWNrYWJsZSB7XG4gICAgfVxuXG4gICAgLndyYXBwZXJfX2NvbnRyb2xzIHtcbiAgICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICB3aWR0aDogMjBweDtcblxuICAgICAgJi0tZGVzY3JpcHRpb24ge1xuICAgICAgICBwYWRkaW5nOiA5cHggMnB4O1xuICAgICAgfVxuXG4gICAgICAuY29udHJvbHNfX2NhcmV0IHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcblxuICAgICAgICAmLS1mb2xkIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgJi0tdW5mb2xkIHtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndyYXBwZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZzogNHB4IDZweDtcblxuICAgICAgJi0tZGVzY3JpcHRpb24ge1xuICAgICAgICAuY29udGVudF9fdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogbWl4KHdoaXRlLCAkY29sb3ItLXF1aW5hcnksIDMwJSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50X19kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6IG1peChibGFjaywgJGNvbG9yLS1xdWluYXJ5LCAzMCUpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi0tc2VsZWN0ZWQge1xuICAgICAgICAuY29udGVudF9fdGl0bGUge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3ItLW9jdG9uYXJ5O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50X190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICRjb2xvci0tcXVpbmFyeTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAud3JhcHBlcl9fbGFiZWwge1xuICAgICAgLmxhYmVsX19pbnB1dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLndyYXBwZXJfX2ljb24ge1xuICAgICAgY29sb3I6IG1peChibGFjaywgJGNvbG9yLS1xdWluYXJ5LCAzMCUpO1xuICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICBoZWlnaHQ6IDI4cHg7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIHRyYW5zaXRpb246IGFsbCAxMDBtcyBlYXNlLWluO1xuXG4gICAgICAmLS1zZWxlY3RlZCB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItLW9jdG9uYXJ5O1xuICAgICAgfVxuICAgIH1cblxuICB9XG59XG4iLCIkY29sb3ItLXByaW1hcnk6ICNDQTM1Nzc7XG4kY29sb3ItLXNlY29uZGFyeTogIzRmY2Y4OTtcbiRjb2xvci0tdGVydGlhcnk6ICMwRjExMTk7XG4kY29sb3ItLXF1YXRlcm5hcnk6ICNlYWRlNGM7XG4kY29sb3ItLXF1aW5hcnk6ICM5MTkxOTE7XG4kY29sb3ItLXNlbmFyeTogIzRjZWFlNDtcbiRjb2xvci0tc2VwdGVuYXJ5OiAjMDAwMDAwO1xuJGNvbG9yLS1vY3RvbmFyeTogI2ZmZmZmZjtcbiIsIiN0cmVlLW5vZGUgLmNvbXBvbmVudF9fd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjOTE5MTkxO1xufVxuI3RyZWUtbm9kZSAuY29tcG9uZW50X193cmFwcGVyLS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICMxZDFmMjc7XG59XG4jdHJlZS1ub2RlIC5jb21wb25lbnRfX3dyYXBwZXItLXJvb3QgLndyYXBwZXJfX2NvbnRlbnQgLmNvbnRlbnRfX3RpdGxlIHtcbiAgY29sb3I6ICM4MENCQzQgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiN0cmVlLW5vZGUgLmNvbXBvbmVudF9fd3JhcHBlci0tb3BhcXVlIHtcbiAgb3BhY2l0eTogMC41O1xufVxuI3RyZWUtbm9kZSAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX19jb250cm9scyB7XG4gIHBhZGRpbmc6IDJweCA3cHg7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDIwcHg7XG59XG4jdHJlZS1ub2RlIC5jb21wb25lbnRfX3dyYXBwZXIgLndyYXBwZXJfX2NvbnRyb2xzLS1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDlweCAycHg7XG59XG4jdHJlZS1ub2RlIC5jb21wb25lbnRfX3dyYXBwZXIgLndyYXBwZXJfX2NvbnRyb2xzIC5jb250cm9sc19fY2FyZXQge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAyM3B4O1xufVxuI3RyZWUtbm9kZSAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX19jb250ZW50IHtcbiAgcGFkZGluZzogNHB4IDZweDtcbn1cbiN0cmVlLW5vZGUgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fY29udGVudC0tZGVzY3JpcHRpb24gLmNvbnRlbnRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI2IyYjJiMiAhaW1wb3J0YW50O1xufVxuI3RyZWUtbm9kZSAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX19jb250ZW50LS1kZXNjcmlwdGlvbiAuY29udGVudF9fZGVzY3JpcHRpb24ge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNjY2NjY2O1xufVxuI3RyZWUtbm9kZSAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX19jb250ZW50LS1zZWxlY3RlZCAuY29udGVudF9fdGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbiN0cmVlLW5vZGUgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9fY29udGVudCAuY29udGVudF9fdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjOTE5MTkxO1xufVxuI3RyZWUtbm9kZSAuY29tcG9uZW50X193cmFwcGVyIC53cmFwcGVyX19sYWJlbCAubGFiZWxfX2lucHV0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiN0cmVlLW5vZGUgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9faWNvbiB7XG4gIGNvbG9yOiAjNjY2NjY2O1xuICBmb250LXNpemU6IDIzcHg7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICB0cmFuc2l0aW9uOiBhbGwgMTAwbXMgZWFzZS1pbjtcbn1cbiN0cmVlLW5vZGUgLmNvbXBvbmVudF9fd3JhcHBlciAud3JhcHBlcl9faWNvbi0tc2VsZWN0ZWQge1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TreeNodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeNodeComponent", function() { return TreeNodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _enums_tree_node_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enums/tree-node.enum */ "./src/app/modules/shared/tree-view/enums/tree-node.enum.ts");



let TreeNodeComponent = class TreeNodeComponent {
    constructor() {
        this.foldingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this._paddingLeft = this.paddingLeft + this.paddingIncrease;
        this._path = `${this.path}.${this.node.key}`;
        if (this.nodeClickable && this.selectionAllowed && this.node.selected) {
            this.selectionChanged.emit(this._path);
        }
        if (this.isRootNode) {
            this.toggleChildren(new MouseEvent('click'));
        }
    }
    get isGroupNode() {
        return this.node.type === _enums_tree_node_enum__WEBPACK_IMPORTED_MODULE_2__["typeEnums"].NODE_GROUP;
    }
    get hasChildren() {
        return this.node.children && this.node.children.length > 0;
    }
    get children() {
        return this.hasChildren ? this.node.children : [];
    }
    get unfolded() {
        return !!this.unfoldedNodes.find(candidate => candidate.key === this.node.key);
    }
    get selectionEnabled() {
        return this.config.selection && this.config.selection.enabled;
    }
    get selected() {
        return !!this.selectedNodes.find(path => path === this._path);
    }
    get maxSelectionsReached() {
        if (!this.config.selection) {
            return false;
        }
        if (!this.config.selection.maxSelections) {
            return false;
        }
        return this.config.selection.maxSelections <= this.selectedNodes.length;
    }
    get selectionAllowed() {
        return !this.maxSelectionsReached || this.selected;
    }
    get nodeClickable() {
        return this.config.selection && this.config.selection.nodeClickable;
    }
    nodeClicked() {
        if (this.nodeClickable && this.selectionAllowed) {
            this.selectionChanged.emit(this._path);
        }
    }
    checkboxClicked($event) {
        $event.stopPropagation();
        if (this.selectionAllowed) {
            this.selectionChanged.emit(this._path);
        }
    }
    toggleChildren($event) {
        $event.stopPropagation();
        this.foldingChanged.emit(this.node);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TreeNodeComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TreeNodeComponent.prototype, "node", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], TreeNodeComponent.prototype, "paddingLeft", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], TreeNodeComponent.prototype, "isRootNode", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], TreeNodeComponent.prototype, "paddingIncrease", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], TreeNodeComponent.prototype, "unfoldedNodes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], TreeNodeComponent.prototype, "path", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], TreeNodeComponent.prototype, "selectedNodes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeNodeComponent.prototype, "foldingChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeNodeComponent.prototype, "selectionChanged", void 0);
TreeNodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tree-node',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tree-node.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tree-node.component.scss */ "./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TreeNodeComponent);



/***/ }),

/***/ "./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL2hhcnZlc3Rlci9zcmMvYXBwL21vZHVsZXMvc2hhcmVkL3RyZWUtdmlldy9jb21wb25lbnRzL3RyZWUtdmlldy90cmVlLXZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TreeViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewComponent", function() { return TreeViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/tree-node.utils */ "./src/app/modules/shared/tree-view/utils/tree-node.utils.ts");



let TreeViewComponent = class TreeViewComponent {
    constructor(treeNodeUtils, chr) {
        this.treeNodeUtils = treeNodeUtils;
        this.chr = chr;
        this.config = {};
        this.rootNodes = [];
        this.foldingChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectionChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-next-line:variable-name
        this._unfoldedNodes = [];
        // tslint:disable-next-line:variable-name
        this._selectedNodes = [];
    }
    get unfoldedNodes() {
        return this._unfoldedNodes;
    }
    get selectedNodes() {
        return this._selectedNodes;
    }
    ngOnInit() {
    }
    updateUnfoldedNodes(node) {
        this._unfoldedNodes = this.treeNodeUtils.nodeAccumulator(this._unfoldedNodes, node);
        this.foldingChanged.emit(this._unfoldedNodes);
    }
    updateSelectedNodes(path) {
        this._selectedNodes = [path];
        this.selectionChanged.emit(this._selectedNodes);
    }
    giveId(index, node) {
        return node ? node.key : index;
    }
};
TreeViewComponent.ctorParameters = () => [
    { type: _utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_2__["TreeNodeUtils"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], TreeViewComponent.prototype, "config", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], TreeViewComponent.prototype, "rootNodes", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeViewComponent.prototype, "foldingChanged", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TreeViewComponent.prototype, "selectionChanged", void 0);
TreeViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tree-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tree-view.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tree-view.component.scss */ "./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_2__["TreeNodeUtils"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TreeViewComponent);



/***/ }),

/***/ "./src/app/modules/shared/tree-view/tree-view.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/shared/tree-view/tree-view.module.ts ***!
  \**************************************************************/
/*! exports provided: TreeViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeViewModule", function() { return TreeViewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tree-view/tree-view.component */ "./src/app/modules/shared/tree-view/components/tree-view/tree-view.component.ts");
/* harmony import */ var _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tree-node/tree-node.component */ "./src/app/modules/shared/tree-view/components/tree-node/tree-node.component.ts");
/* harmony import */ var _utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/tree-node.utils */ "./src/app/modules/shared/tree-view/utils/tree-node.utils.ts");






let TreeViewModule = class TreeViewModule {
};
TreeViewModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_3__["TreeViewComponent"], _components_tree_node_tree_node_component__WEBPACK_IMPORTED_MODULE_4__["TreeNodeComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_components_tree_view_tree_view_component__WEBPACK_IMPORTED_MODULE_3__["TreeViewComponent"]],
        providers: [_utils_tree_node_utils__WEBPACK_IMPORTED_MODULE_5__["TreeNodeUtils"]],
    })
], TreeViewModule);



/***/ })

}]);
//# sourceMappingURL=modules-feature-home-home-module-es2015.js.map