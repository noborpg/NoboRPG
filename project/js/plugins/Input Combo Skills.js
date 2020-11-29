//=============================================================================
// Visustella Input Combo Skills
// Version: 1.1
//=============================================================================
// Add to Imported List
var Imported = Imported || {};
Imported.Visustella_InputComboSkills = true;
// Initialize Alias Object
var Visustella = Visustella || {};
Visustella.InputComboSkills = Visustella.InputComboSkills || {};
//=============================================================================
/*:
* @author Visustella
* @plugindesc
* This script enables the usage of Active Chain Skills.
*
* @param Settings
*
* @param DefaultInputTimer
* @text Default Input Timer
* @parent Settings
* @type number
* @default 500
* @desc Amount of time to wait for input. (In frames)
*
*
* @param DefaultActionDelayStart
* @text Default Action Delay Start
* @parent Settings
* @type number
* @default 60
* @desc Amount of time to wait before allowing input. (In frames)
*
* @param Inputs
* @parent Settings
* @type struct<InputData>[]
* @default ["{\"InputName\":\"pageup\",\"KeyName\":\"Q\"}","{\"InputName\":\"pagedown\",\"KeyName\":\"W\"}","{\"InputName\":\"a\",\"KeyName\":\"A\"}","{\"InputName\":\"s\",\"KeyName\":\"S\"}","{\"InputName\":\"d\",\"KeyName\":\"D\"}"]
*
@help 
* ============================================================================
* * Skill Note Tags
* ============================================================================
*
*    <ComboMax: MAX>
*
*    Maximum  amount of combo skills that can be performed.
*
*    MAX
*    ^ Max value.
*
*    Example:
*
*     <ComboMax: 3>

*    <ComboSkillInput[INDEX]: ID>
*
*    Sets the input for a skill to combo with.
*  
*    INDEX
*    ^ Input index value. (This is determined by the position of the index
*      in the Inputs parameter array of the script.)
*
*    ID
*    ^ Id of the skill which the input will combo with.
*
*    Examples:
*
*     <ComboSkillInput1: 4>
*     <ComboSkillInput2: 5>
*     <ComboSkillInput3: 8>
*     <ComboSkillInput4: 9>
*     <ComboSkillInput5: 10>
*
*     <ComboCombination: COMBINATION, RESULT>
*
*    The combinations of skills that result in a new skill being used.
*    
*    COMBINATION
*    ^ The ID combination of inputs.
*    ^ If the combo is 1 1 1 the it becomes 1-1-1 and if its 5 4 1 then it becomes 5-4-1.
*
*    RESULT
*    ^ Skill Id for the combo.
*
*    Examples:
*
*      <ComboCombination: 4-4-4, 10>
*      <ComboCombination: 3-1-3, 3>
*
*/
/*~struct~InputData:
 * @param InputName
 * @text Input Name
 * @type number
 * @default 
 * @desc Internal name of the input key.
 *  
 * @param KeyName
 * @text Key Name
 * @type text
 * @default ""
 * @desc Name to display for this input key. 
 *

 *
 */
//=============================================================================
// Use Strict  
"use strict";

// If Not RPG Maker MV
if (Utils.RPGMAKER_NAME !== "MV") SceneManager.exit();

// Use Strict  
"use strict";
(function($) {
    var _0x4b7d = ['Input\x20Combo\x20Attacks', 'show', 'addChild', 'entries', 'toString', 'fillRect', 'StartDelay', '_combo', 'parse', '_inputTime', 'isDamagePopupRequested', 'WAIT\x20FOR\x20EFFECT', 'InputTime', 'path', 'call', 'name', '_comboSkillWindow', 'processTurn', '_comboInputting', 'processActionSequence', 'some', 'isAllDead', 'skill', 'ComboMax', 'BattleManager_processActionSequence', 'BattleManager_startAction', 'trim', '\x5cC[%1]%2\x5cC[0]:\x20\x5cI[%3]%4', 'drawComboIcons', 'ComboSkillInput', 'opacity', 'prepare', 'meta', 'skillComboCombinations', 'isPopupPlaying', 'drawText', 'input', 'prototype', 'hide', 'skillComboList', 'max', 'combo', 'ACTION\x20COMMON\x20EVENT', 'constructor', '_battler', 'updateComboSkillProcessing', 'DefaultActionFinish', 'battlerSprites', 'endComboSkillInput', 'actionWaitForComboInput', 'WAIT\x20FOR\x20NEW\x20LINE', 'rgba(0,\x200,\x200,\x200.75)', '_iconWidth', 'isValid', 'FALSE', 'inputKeys', 'startAction', 'drawComboSpecial', 'exec', 'format', 'initialize', 'setAction', 'drawInputSkill', 'bitmap', 'shift', 'equals', '_totalHeight', 'find', 'length', 'setSkill', 'note', '_skillStartDelay', 'BEC', 'PERFORM\x20FINISH', 'CLEAR\x20BATTLE\x20LOG', '_comboSkills', '_logWindow', 'gradientFillRect', 'drawComboSkills', 'map', 'push', 'params', 'comboCombinationsList', 'createAllWindows', 'update', 'drawHorizontalLine', 'comboInputList', 'comboSY', 'indexOf', 'refresh', 'defaultActionDelayStart', 'DefaultInputTimer', 'setComboSkillWindow', 'isBattleBusy', 'keyNames', 'isAnimationPlaying', 'create', '.js', 'addComboSkill', 'clear', 'forEach', 'splice', 'iconIndex', 'windowHeight', 'width', 'deactivate', 'split', 'active', 'isTriggered', 'item', 'drawBackground', 'InputName', 'fittingHeight', 'endAction', 'paintOpacity', '_finished', '_skill', 'contents', 'clearRect', '_maxCombo', 'addChildToBack', 'updateComboSkillInput', 'setup', '_phase', '_spriteset', 'BattleManager_endAction', 'parameters', 'windowWidth', 'isBusy', 'TARGETS', 'actionClearComboInput', 'changePaintOpacity', '_special', 'IMMORTAL', 'CLEAR\x20COMBO\x20INPUT', 'height', 'DefaultActionDelayStart', 'lineHeight', 'drawComboTitle', '_queuedActions', '_backgroundSprite', 'standardPadding', 'activate', 'defaultInputTimer', 'resetFontSettings', '_targetIndex', '_subject', 'createBackgroundSprite', 'isEffecting', 'drawIcon', 'isFinished', 'BattleManager_processTurn', '_messageWindow', 'normalColor', 'Inputs', 'createcComboSkillWindow', 'currentScript', '_comboCombinations', 'currentAction', 'fontItalic', '\x5cI[%1]\x5cC[17]%2', 'skillId', 'removeCurrentAction', 'apply', 'rgba(0,\x200,\x200,\x200)', 'WAIT\x20FOR\x20COMBO\x20INPUT', 'action', 'drawTextEx', 'src', 'startComboSkillInput'];
    (function(_0x59b515, _0x4b7ddc) {
        var _0x5a80da = function(_0x4c3ba1) {
            while (--_0x4c3ba1) {
                _0x59b515['push'](_0x59b515['shift']());
            }
        };
        _0x5a80da(++_0x4b7ddc);
    }(_0x4b7d, 0x1dd));
    var _0x5a80 = function(_0x59b515, _0x4b7ddc) {
        _0x59b515 = _0x59b515 - 0x0;
        var _0x5a80da = _0x4b7d[_0x59b515];
        return _0x5a80da;
    };
    let path = require(_0x5a80('0x2e'));
    let parameters = PluginManager[_0x5a80('0x9f')](decodeURIComponent(path['basename'](document[_0x5a80('0x13')][_0x5a80('0x1f')], _0x5a80('0x82'))));
    $[_0x5a80('0x72')] = {};
    $[_0x5a80('0x72')][_0x5a80('0x6')] = Number(parameters[_0x5a80('0x7c')] || 0x1f4);
    $[_0x5a80('0x72')][_0x5a80('0x7b')] = Number(parameters[_0x5a80('0xa9')] || 0x3c);
    $[_0x5a80('0x72')][_0x5a80('0x58')] = [];
    $[_0x5a80('0x72')]['keyNames'] = {};
    let inputList = JSON[_0x5a80('0x29')](parameters[_0x5a80('0x11')]);
    for (var i = 0x0; i < inputList[_0x5a80('0x65')]; i++) {
        let data = JSON[_0x5a80('0x29')](inputList[i]);
        $[_0x5a80('0x72')]['inputKeys'][i] = data['InputName'];
        $[_0x5a80('0x72')][_0x5a80('0x7f')][data[_0x5a80('0x90')]] = data['KeyName'];
    }
    DataManager['skillComboList'] = function(_0x318a2f) {
        if (_0x318a2f) {
            if (_0x318a2f[_0x5a80('0x41')][_0x5a80('0x77')] === undefined) {
                let _0xa5e1c0 = {};
                let _0xc1eb29 = $['params'][_0x5a80('0x58')];
                for (let _0x4f766d = 0x0; _0x4f766d < _0xc1eb29[_0x5a80('0x65')]; _0x4f766d++) {
                    let _0x128688 = _0xc1eb29[_0x4f766d];
                    let _0x5e4665 = $[_0x5a80('0x72')]['keyNames'][_0x128688];
                    let _0xa0ab5e = _0x318a2f[_0x5a80('0x41')][_0x5a80('0x3e') + (_0x4f766d + 0x1)];
                    if (_0xa0ab5e) {
                        _0xa5e1c0[_0x128688] = Number(_0xa0ab5e);
                    };
                };
                if (Object['keys'](_0xa5e1c0)[_0x5a80('0x65')] > 0x0) {
                    _0x318a2f['meta'][_0x5a80('0x77')] = _0xa5e1c0;
                } else {
                    _0x318a2f['meta'][_0x5a80('0x77')] = null;
                };
            }
            return _0x318a2f[_0x5a80('0x41')][_0x5a80('0x77')];
        };
        return null;
    };
    DataManager[_0x5a80('0x42')] = function(_0x47026e) {
        if (_0x47026e) {
            if (_0x47026e[_0x5a80('0x41')][_0x5a80('0x73')] === undefined) {
                var _0x514374 = [];
                _0x47026e[_0x5a80('0x41')]['comboCombinationsList'] = [];
                var _0x452735 = /<ComboCombination:(.+),(.+)>/gi;
                var _0x5d50b1;
                while (_0x5d50b1 = _0x452735[_0x5a80('0x5b')](_0x47026e[_0x5a80('0x67')])) {
                    var _0x4320c7 = {
                        'skillId': Number(_0x5d50b1[0x2])
                    };
                    _0x4320c7[_0x5a80('0x4a')] = _0x5d50b1[0x1][_0x5a80('0x25')]()[_0x5a80('0x3b')]()[_0x5a80('0x8b')]('-')[_0x5a80('0x70')](Number);
                    console['log'](_0x4320c7[_0x5a80('0x4a')]);
                    _0x47026e[_0x5a80('0x41')]['comboCombinationsList'][_0x5a80('0x71')](_0x4320c7);
                };
                return _0x47026e['meta'][_0x5a80('0x73')];
            } else {
                return _0x47026e[_0x5a80('0x41')][_0x5a80('0x73')];
            };
        };
        return [];
    };
    $[_0x5a80('0x3a')] = BattleManager[_0x5a80('0x59')];
    $[_0x5a80('0xe')] = BattleManager[_0x5a80('0x32')];
    BattleManager[_0x5a80('0x7d')] = function(_0x467d8b) {
        this[_0x5a80('0x31')] = _0x467d8b;
    };
    BattleManager[_0x5a80('0x32')] = function() {
        if (this['_comboInputting']) {
            return;
        };
        $[_0x5a80('0xe')]['call'](this);
    };
    BattleManager[_0x5a80('0x59')] = function() {
        $[_0x5a80('0x3a')]['call'](this);
        if (!this[_0x5a80('0x33')]) {
            var _0x34ada5 = this[_0x5a80('0x9')];
            var _0x4cf4f8 = _0x34ada5[_0x5a80('0x15')]();
            var _0x2ade63 = _0x4cf4f8['makeTargets']();
            this[_0x5a80('0x20')](_0x34ada5, _0x4cf4f8[_0x5a80('0x8e')](), _0x4cf4f8[_0x5a80('0x8')]);
        };
    };
    BattleManager[_0x5a80('0x20')] = function(_0x4e4fee, _0x5822e2, _0xf3a717) {
        var _0x52fafb = this[_0x5a80('0x31')];
        if (_0x4e4fee['isActor']() && DataManager[_0x5a80('0x48')](_0x5822e2)) {
            _0x52fafb[_0x5a80('0x9b')](_0x4e4fee, _0x5822e2, _0xf3a717);
            _0x52fafb['y'] = Graphics[_0x5a80('0xa8')] - _0x52fafb[_0x5a80('0x63')] - 0x1e;
            _0x52fafb[_0x5a80('0x22')]();
            _0x52fafb[_0x5a80('0x5')]();
            this[_0x5a80('0x33')] = !![];
        } else {
            this[_0x5a80('0x33')] = ![];
            _0x52fafb[_0x5a80('0x47')]();
            _0x52fafb[_0x5a80('0x8a')]();
        };
    };
    BattleManager[_0x5a80('0x51')] = function() {
        var _0x4509db = this[_0x5a80('0x31')];
        this[_0x5a80('0x33')] = ![];
        _0x4509db[_0x5a80('0x47')]();
        _0x4509db['clear']();
        _0x4509db[_0x5a80('0x8a')]();
    };
    BattleManager[_0x5a80('0x7e')] = function() {
        var _0x4af76a = this[_0x5a80('0x6d')][_0x5a80('0x9d')][_0x5a80('0x50')]();
        var _0x227968 = _0x4af76a[_0x5a80('0x35')](function(_0x250658) {
            if (_0x250658[_0x5a80('0xb')]()) {
                return !![];
            };
            if (_0x250658['isMoving']()) {
                return !![];
            };
            if (_0x250658[_0x5a80('0x80')]()) {
                return !![];
            };
            if (_0x250658[_0x5a80('0x4d')] && _0x250658[_0x5a80('0x4d')][_0x5a80('0x2b')]()) {
                return ![];
            };
            if (_0x250658[_0x5a80('0x43')] && _0x250658[_0x5a80('0x43')]()) {
                return !![];
            };
            if (_0x250658['_damages'][_0x5a80('0x65')] > 0x0) {
                return !![];
            };
            return ![];
        });
        return _0x227968 || this['_logWindow'][_0x5a80('0xa1')]() || this[_0x5a80('0x9c')] === _0x5a80('0x1d');
    };
    $['Scene_Battle_createAllWindows'] = Scene_Battle[_0x5a80('0x46')][_0x5a80('0x74')];
    Scene_Battle[_0x5a80('0x46')]['createAllWindows'] = function() {
        $['Scene_Battle_createAllWindows'][_0x5a80('0x2f')](this);
        this['createcComboSkillWindow']();
    };
    Scene_Battle['prototype'][_0x5a80('0x12')] = function() {
        this[_0x5a80('0x31')] = new Window_ComboSkillList();
        this[_0x5a80('0x31')]['y'] = this[_0x5a80('0xf')]['y'] - this[_0x5a80('0x31')][_0x5a80('0xa8')] - 0x1e;
        this[_0x5a80('0x23')](this[_0x5a80('0x31')]);
        BattleManager[_0x5a80('0x7d')](this[_0x5a80('0x31')]);
    };

    function Window_ComboSkillList() {
        this[_0x5a80('0x5d')][_0x5a80('0x1a')](this, arguments);
    }
    Window_ComboSkillList[_0x5a80('0x46')] = Object[_0x5a80('0x81')](Window_Selectable[_0x5a80('0x46')]);
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x4c')] = Window_ComboSkillList;
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x5d')] = function(_0x5bb089) {
        Window_Selectable[_0x5a80('0x46')][_0x5a80('0x5d')]['call'](this, 0x0, 0x0, this[_0x5a80('0xa0')](), this[_0x5a80('0x88')]());
        this[_0x5a80('0x84')]();
        this[_0x5a80('0x63')] = this[_0x5a80('0xa8')];
        this[_0x5a80('0x3f')] = 0x0;
        this[_0x5a80('0xa')]();
        this['refresh']();
        this['hide']();
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x4')] = function() {
        return 0x0;
    };
    Window_ComboSkillList['prototype'][_0x5a80('0xa0')] = function() {
        return Math[_0x5a80('0x49')](Graphics[_0x5a80('0x89')] / 0x2, 0x140);
    };
    Window_ComboSkillList['prototype'][_0x5a80('0x88')] = function() {
        return this[_0x5a80('0x91')](0x7);
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x78')] = function() {
        return this[_0x5a80('0x91')](this[_0x5a80('0x6c')]['length'] + 0x1);
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0xa')] = function() {
        this[_0x5a80('0x3')] = new Sprite(new Bitmap(this[_0x5a80('0x89')], this['height']));
        this[_0x5a80('0x99')](this[_0x5a80('0x3')]);
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0xd')] = function() {
        return this[_0x5a80('0x94')];
    };
    Window_ComboSkillList[_0x5a80('0x46')]['clear'] = function() {
        this[_0x5a80('0x4d')] = null;
        this[_0x5a80('0x95')] = null;
        this['_targetIndex'] = -0x1;
        this[_0x5a80('0x6c')] = [];
        this[_0x5a80('0x28')] = [];
        this[_0x5a80('0x98')] = 0x5;
        this[_0x5a80('0x14')] = [];
        this[_0x5a80('0xa5')] = null;
        this[_0x5a80('0x2')] = [];
        this[_0x5a80('0x68')] = 0x3c;
        this['_inputTime'] = 0x64;
        this['_finished'] = !![];
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x9b')] = function(_0x117471, _0x1b0d1f, _0x438b1a) {
        this[_0x5a80('0x84')]();
        this[_0x5a80('0x4d')] = _0x117471;
        this[_0x5a80('0x95')] = _0x1b0d1f;
        this[_0x5a80('0x8')] = _0x438b1a;
        this[_0x5a80('0x6c')] = [];
        var _0xc71802 = DataManager[_0x5a80('0x48')](_0x1b0d1f);
        if (_0xc71802) {
            Object[_0x5a80('0x24')](_0xc71802)[_0x5a80('0x85')](function(_0x45e9da) {
                this[_0x5a80('0x6c')][_0x5a80('0x71')]({
                    'input': _0x45e9da[0x0],
                    'skill': $dataSkills[_0x45e9da[0x1]]
                });
            }, this);
        };
        this[_0x5a80('0x14')] = DataManager[_0x5a80('0x42')](_0x1b0d1f);
        this[_0x5a80('0x98')] = _0x1b0d1f[_0x5a80('0x41')][_0x5a80('0x38')] === undefined ? 0x5 : Number(_0x1b0d1f[_0x5a80('0x41')][_0x5a80('0x38')]);
        this['_totalHeight'] = this[_0x5a80('0x91')](this[_0x5a80('0x6c')][_0x5a80('0x65')] + 0x7);
        this[_0x5a80('0x68')] = _0x1b0d1f['meta'][_0x5a80('0x27')] === undefined ? $['params'][_0x5a80('0x7b')] : Number(_0x1b0d1f[_0x5a80('0x41')][_0x5a80('0x27')]);
        this[_0x5a80('0x2a')] = _0x1b0d1f[_0x5a80('0x41')][_0x5a80('0x2d')] === undefined ? $[_0x5a80('0x72')][_0x5a80('0x6')] : Number(_0x1b0d1f['meta'][_0x5a80('0x2d')]);
        this[_0x5a80('0x94')] = ![];
        this[_0x5a80('0x7a')]();
    };
    Window_ComboSkillList[_0x5a80('0x46')]['refresh'] = function() {
        this[_0x5a80('0x96')]['clear']();
        this['drawBackground']();
        this[_0x5a80('0x1')]();
        this[_0x5a80('0x6f')]();
        this[_0x5a80('0x3d')]();
    };
    Window_ComboSkillList['prototype'][_0x5a80('0x8f')] = function(_0x2b68db, _0x5ef309 = this[_0x5a80('0x3')][_0x5a80('0x60')]) {
        var _0x596c59 = this['_comboSkills'][_0x5a80('0x65')];
        var _0x121a42 = this[_0x5a80('0x91')](_0x596c59 + 0x2);
        this['_backgroundSprite'][_0x5a80('0x60')][_0x5a80('0x84')]();
        this[_0x5a80('0x3')][_0x5a80('0x60')][_0x5a80('0x6e')](0x0, 0x0, this[_0x5a80('0x89')], _0x121a42, _0x5a80('0x54'), _0x5a80('0x1b'));
        this[_0x5a80('0x76')](0x1);
        this[_0x5a80('0x76')](_0x596c59 + 0x1);
    };
    Window_ComboSkillList['prototype'][_0x5a80('0x76')] = function(_0x56c5e9, _0x4ee202 = this[_0x5a80('0x3')][_0x5a80('0x60')]) {
        var _0x461b88 = _0x56c5e9 * this[_0x5a80('0x0')]() - 0x2;
        var _0x547740 = this[_0x5a80('0x10')]();
        _0x4ee202[_0x5a80('0x93')] = 0x30;
        _0x4ee202[_0x5a80('0x97')](0x0, _0x461b88, this[_0x5a80('0x96')][_0x5a80('0x89')], 0x2);
        _0x4ee202[_0x5a80('0x26')](0x0, _0x461b88, this[_0x5a80('0x96')][_0x5a80('0x89')], 0x2, this[_0x5a80('0x10')]());
        _0x4ee202[_0x5a80('0x93')] = 0xff;
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x1')] = function() {
        this[_0x5a80('0x7')]();
        this[_0x5a80('0x96')][_0x5a80('0x16')] = !![];
        this[_0x5a80('0x44')](_0x5a80('0x21'), 0xc, 0x0, this[_0x5a80('0x96')][_0x5a80('0x89')]);
        this['resetFontSettings']();
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x6f')] = function() {
        var _0x4ae488 = $[_0x5a80('0x58')];
        var _0xee864e = DataManager[_0x5a80('0x48')](this[_0x5a80('0x95')]);
        for (var _0x825b62 = 0x0; _0x825b62 < this[_0x5a80('0x6c')][_0x5a80('0x65')]; _0x825b62++) {
            var _0x2ed663 = this[_0x5a80('0x6c')][_0x825b62];
            this['drawInputSkill'](_0x825b62, $[_0x5a80('0x72')][_0x5a80('0x7f')][_0x2ed663[_0x5a80('0x45')]], _0x2ed663[_0x5a80('0x37')]);
        }
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x5f')] = function(_0x253370, _0x21a16d, _0x13112b) {
        var _0x39b4a7 = this[_0x5a80('0x4d')]['canUse'](_0x13112b) && this[_0x5a80('0x2a')] > 0x0 && this[_0x5a80('0x28')]['length'] < this[_0x5a80('0x98')];
        var _0xacaee2 = _0x5a80('0x3c')[_0x5a80('0x5c')](_0x39b4a7 ? 0x11 : 0x7, _0x21a16d, _0x13112b[_0x5a80('0x87')], _0x13112b[_0x5a80('0x30')]);
        var _0x4e53b9 = this[_0x5a80('0x0')]() * (_0x253370 + 0x1);
        this[_0x5a80('0xa4')](_0x39b4a7);
        this[_0x5a80('0x1e')](_0xacaee2, 0x18, _0x4e53b9);
        this[_0x5a80('0xa4')](!![]);
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x3d')] = function() {
        var _0x46bc31 = this[_0x5a80('0x78')]();
        var _0x41914c = 0x18;
        for (var _0x495a16 = 0x0; _0x495a16 < this[_0x5a80('0x28')][_0x5a80('0x65')]; _0x495a16++) {
            var _0x5302f9 = $dataSkills[this['_combo'][_0x495a16]['skillId']];
            this[_0x5a80('0xc')](_0x5302f9[_0x5a80('0x87')], _0x41914c, _0x46bc31 + 0x2);
            _0x41914c += Window_Base[_0x5a80('0x55')] + 0x1;
        }
        this[_0x5a80('0x5a')](_0x41914c);
    };
    Window_ComboSkillList['prototype']['drawComboSpecial'] = function(_0x208e91, _0x25416a = this[_0x5a80('0xa5')]) {
        if (_0x25416a) {
            var _0x459927 = _0x5a80('0x17')['format'](_0x25416a[_0x5a80('0x87')], _0x25416a[_0x5a80('0x30')]);
            var _0x42c53f = this[_0x5a80('0x78')]();
            this['drawTextEx'](_0x459927, _0x208e91, _0x42c53f);
        };
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x75')] = function() {
        Window_Selectable[_0x5a80('0x46')]['update'][_0x5a80('0x2f')](this);
        if (this[_0x5a80('0x8c')]) {
            this[_0x5a80('0x9a')]();
            this[_0x5a80('0x4e')]();
        };
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x83')] = function(_0x27cc37, _0x13487a) {
        this[_0x5a80('0x28')][_0x5a80('0x71')]({
            'input': _0x27cc37,
            'skillId': _0x13487a['id']
        });
        var _0x536219 = this[_0x5a80('0x28')][_0x5a80('0x70')](_0x4449bb => $['params'][_0x5a80('0x58')][_0x5a80('0x79')](_0x4449bb[_0x5a80('0x45')]) + 0x1);
        var _0x59d18d = this['_comboCombinations'][_0x5a80('0x64')](_0x307edf => _0x307edf[_0x5a80('0x4a')][_0x5a80('0x62')](_0x536219));
        var _0x1e7cb0 = new Game_Action(this[_0x5a80('0x4d')]);
        _0x1e7cb0['setTarget'](this['_targetIndex']);
        if (_0x59d18d) {
            this['_special'] = $dataSkills[_0x59d18d[_0x5a80('0x18')]];
            _0x1e7cb0[_0x5a80('0x66')](_0x59d18d[_0x5a80('0x18')]);
        } else {
            _0x1e7cb0[_0x5a80('0x66')](_0x13487a['id']);
        };
        this[_0x5a80('0x2')][_0x5a80('0x71')](_0x1e7cb0);
        this[_0x5a80('0x7a')]();
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x9a')] = function() {
        if (this['_inputTime'] > 0x0) {
            this[_0x5a80('0x2a')]--;
            var _0x414915 = $[_0x5a80('0x72')][_0x5a80('0x58')];
            if (this[_0x5a80('0x28')][_0x5a80('0x65')] < this[_0x5a80('0x98')]) {
                for (var _0xe9adca = 0x0; _0xe9adca < _0x414915['length']; _0xe9adca++) {
                    var _0x126b78 = _0x414915[_0xe9adca];
                    if (Input[_0x5a80('0x8d')](_0x126b78)) {
                        var _0x29cee5 = this[_0x5a80('0x6c')][_0x5a80('0x64')](function(_0x4614b0) {
                            return _0x4614b0[_0x5a80('0x45')] === _0x126b78;
                        });
                        if (_0x29cee5) {
                            var _0x49a883 = _0x29cee5[_0x5a80('0x37')];
                            this[_0x5a80('0x83')](_0x126b78, _0x49a883);
                        };
                    };
                };
            };
            if (this[_0x5a80('0x2a')] <= 0x0) {
                this[_0x5a80('0x7a')]();
            };
        };
    };
    Window_ComboSkillList[_0x5a80('0x46')][_0x5a80('0x4e')] = function() {
        var _0x45c9e4 = BattleManager[_0x5a80('0x7e')]();
        if (this[_0x5a80('0x68')] > 0x0) {
            this[_0x5a80('0x68')]--;
        } else {
            if (!_0x45c9e4 && !this[_0x5a80('0x4d')][_0x5a80('0x15')]()) {
                if (this[_0x5a80('0x2')][_0x5a80('0x65')] > 0x0) {
                    var _0x4c5367 = $gameParty['isAllDead']() || $gameTroop[_0x5a80('0x36')]();
                    var _0x151100 = this['_queuedActions'][_0x5a80('0x61')]();
                    this['_battler'][_0x5a80('0x5e')](0x0, _0x151100);
                    _0x151100[_0x5a80('0x40')]();
                    if (!_0x4c5367 && _0x151100[_0x5a80('0x56')]()) {
                        BattleManager[_0x5a80('0x59')]();
                    } else {
                        this[_0x5a80('0x68')] = 0x0;
                        this[_0x5a80('0x2a')] = 0x0;
                        this[_0x5a80('0x2')][_0x5a80('0x86')](0x0, this['_queuedActions'][_0x5a80('0x65')]);
                    }
                    this[_0x5a80('0x4d')]['removeCurrentAction']();
                    this[_0x5a80('0x7a')]();
                };
            };
        };
        if (this['_skillStartDelay'] <= 0x0 && this[_0x5a80('0x2a')] <= 0x0 && this['_queuedActions'][_0x5a80('0x65')] <= 0x0) {
            BattleManager[_0x5a80('0x51')]();
        };
    };
    if (Imported['YEP_BattleEngineCore']) {
        Yanfly[_0x5a80('0x69')][_0x5a80('0x4f')] = [
            [_0x5a80('0xa6'), [_0x5a80('0xa2'), _0x5a80('0x57')]],
            [_0x5a80('0x53')],
            [_0x5a80('0x6b')],
            [_0x5a80('0x6a')],
            ['WAIT\x20FOR\x20MOVEMENT'],
            [_0x5a80('0x2c')],
            [_0x5a80('0x4b')],
            ['WAIT\x20FOR\x20COMBO\x20INPUT'],
            [_0x5a80('0xa7')]
        ];
        Window_ComboSkillList['prototype']['updateComboSkillProcessing'] = function() {
            var _0x2a3988 = BattleManager[_0x5a80('0x7e')]();
            if (this[_0x5a80('0x68')] > 0x0) {
                this[_0x5a80('0x68')]--;
            };
            if (this[_0x5a80('0x68')] <= 0x0 && this['_inputTime'] <= 0x0 && this[_0x5a80('0x2')][_0x5a80('0x65')] <= 0x0) {
                BattleManager[_0x5a80('0x51')]();
            };
        };
        $[_0x5a80('0x9e')] = BattleManager['endAction'];
        $[_0x5a80('0x39')] = BattleManager[_0x5a80('0x34')];
        BattleManager[_0x5a80('0x92')] = function() {
            BattleManager[_0x5a80('0x51')]();
            $[_0x5a80('0x9e')][_0x5a80('0x2f')](this);
        };
        BattleManager[_0x5a80('0x34')] = function(_0x1056c9, _0x526b2a) {
            if (_0x1056c9 === _0x5a80('0x1c')) {
                return this[_0x5a80('0x52')]();
            }
            if (_0x1056c9 === _0x5a80('0xa7')) {
                return this[_0x5a80('0xa3')]();
            }
            return $['BattleManager_processActionSequence'][_0x5a80('0x2f')](this, _0x1056c9, _0x526b2a);
        };
        BattleManager['actionClearComboInput'] = function() {
            this[_0x5a80('0x51')]();
            return ![];
        };
        BattleManager['actionWaitForComboInput'] = function() {
            const _0x15754d = BattleManager[_0x5a80('0x31')];
            let _0x3894db = _0x15754d[_0x5a80('0x2')];
            if (_0x3894db['length'] > 0x0) {
                let _0x5e624e = $gameParty[_0x5a80('0x36')]() || $gameTroop[_0x5a80('0x36')]();
                let _0x2c600b = _0x3894db[_0x5a80('0x61')]();
                let _0x180280 = _0x15754d[_0x5a80('0x4d')];
                _0x180280[_0x5a80('0x5e')](0x0, _0x2c600b);
                _0x2c600b['prepare']();
                if (!_0x5e624e && _0x2c600b['isValid']()) {
                    this[_0x5a80('0x59')]();
                } else {
                    _0x15754d[_0x5a80('0x68')] = 0x0;
                    _0x15754d[_0x5a80('0x2a')] = 0x0;
                    _0x3894db['splice'](0x0, _0x3894db[_0x5a80('0x65')]);
                }
                _0x180280[_0x5a80('0x19')]();
                _0x15754d['refresh']();
            };
            return ![];
        };
    }
})(Visustella.InputComboSkills);