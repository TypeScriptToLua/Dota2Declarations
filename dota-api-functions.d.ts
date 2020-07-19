/** @noSelfInFile */

/**
 * Add temporary vision for a given team ( nTeamID, vLocation, flRadius, flDuration, bObstructedVision)
 */
declare function AddFOWViewer(team: DOTATeam_t, location: Vector, radius: number, duration: number, obstructedVision: boolean): void;
/**
 * Returns the number of degrees difference between two yaw angles
 */
declare function AngleDiff(arg1: number, arg2: number): number;
/**
 * Generate a vector given a QAngles.
 */
declare function AnglesToVector(angles: QAngle): Vector;
/**
 * Appends a string to a log file on the server
 */
declare function AppendToLogFile(arg1: string, arg2: string): void;

interface DamageTable {
    victim: CDOTA_BaseNPC;
    attacker: CDOTA_BaseNPC;
    damage: number;
    damage_type: DAMAGE_TYPES;
    damage_flags?: DOTADamageFlag_t;
    ability?: CDOTABaseAbility;
}
/**
 * Damage an npc.
 */
declare function ApplyDamage(arg1: DamageTable): number;
/**
 * (vector,float) constructs a quaternion representing a rotation by angle around the specified vector axis
 */
declare function AxisAngleToQuaternion(arg1: Vector, arg2: number): Quaternion;
/**
 * Compute the closest point on the OBB of an entity.
 */
declare function CalcClosestPointOnEntityOBB(entity: CBaseEntity, arg2: Vector): Vector;
/**
 * Compute the distance between two entity OBB. A negative return value indicates an input error. A return value of zero indicates that the OBBs are overlapping.
 */
declare function CalcDistanceBetweenEntityOBB(entity1: CBaseEntity, entity2: CBaseEntity): number;
declare function CalcDistanceToLineSegment2D(arg1: Vector, arg2: Vector, arg3: Vector): number;
/**
 * Create all I/O events for a particular entity
 */
declare function CancelEntityIOEvents(arg1: CBaseEntity): void;
/**
 * Centers each players' camera on a unit.
 */
declare function CenterCameraOnUnit(playerId: PlayerID, unit: CDOTA_BaseNPC): void;
/**
 * ( teamNumber )
 */
declare function ClearTeamCustomHealthbarColor(team: DOTATeam_t): void;
/**
 * (hInflictor, hAttacker, flDamage) - Allocate a damageinfo object, used as an argument to TakeDamage(). Call DestroyDamageInfo( hInfo ) to free the object.
 */
declare function CreateDamageInfo(hInflictor: table, arg2: table, arg3: Vector, arg4: Vector, arg5: number, arg6: number): table;
/**
 * Pass table - Inputs: entity, effect
 */
declare function CreateEffect(arg1: table): boolean;
/**
 * Create an HTTP request.
 */
declare function CreateHTTPRequest(method: string, url: string): CScriptHTTPRequest;
/**
 * Create an HTTP request.
 */
declare function CreateHTTPRequestScriptVM(method: string, url: string): CScriptHTTPRequest;
/**
 * Creates a DOTA hero by its dota_npc_units.txt name and sets it as the given player's controlled hero
 */
declare function CreateHeroForPlayer(heroName: string, player: CDOTAPlayer): CDOTA_BaseNPC_Hero;
/**
 * Configuration table for creating illusions.
 */
interface IllusionModifierKeys {
    outgoing_damage?: number;
    incoming_damage?: number;
    bounty_base?: number;
    bounty_growth?: number;
    outgoing_damage_structure?: number;
    outgoing_damage_roshan?: number;
}
/**
 * Create one or more illusions.
 * @param hOwner The handle of the owner of the illusions.
 * @param hHeroToCopy The hero to make illusions of.
 * @param hModifierKeys Configuration table for illusion stats.
 * @param nNumIllusions The number of illusions to create.
 * @param nPadding Padding distance between hero and illusions.
 * @param bScramblePosition Scramble position of the hero/illusions? 
 * @param bFindClearSpace Find clear space for illusions?
 */
declare function CreateIllusions(hOwner: CDOTA_BaseNPC, hHeroToCopy: CDOTA_BaseNPC_Hero, hModifierKeys: IllusionModifierKeys,
                                 nNumIllusions: number, nPadding: number, bScramblePosition: boolean, bFindClearSpace: boolean): Record<number, CDOTA_BaseNPC>;
/**
 * Create a DOTA item
 */
declare function CreateItem(itemName: string, owner: CDOTAPlayer | undefined, purchaser: CDOTAPlayer | undefined): CDOTA_Item;
/**
 * Create a physical item at a given location, can start in air (but doesn't clear a space)
 */
declare function CreateItemOnPositionForLaunch(location: Vector, item: CDOTA_Item): CDOTA_Item_Physical;
/**
 * Create a physical item at a given location
 */
declare function CreateItemOnPositionSync(location: Vector, item: CDOTA_Item): CDOTA_Item_Physical;
/**
 * Create a modifier not associated with an NPC. ( hCaster, hAbility, modifierName, paramTable, vOrigin, nTeamNumber, bPhantomBlocker )
 */
declare function CreateModifierThinker(caster: CDOTA_BaseNPC | undefined, ability: CDOTABaseAbility | undefined, modifierName: string, params: table, arg5: Vector, arg6: number, arg7: boolean): CBaseEntity;
/**
 * Create a scene entity to play the specified scene.
 */
declare function CreateSceneEntity(arg1: string): CSceneEntity;
/**
 * Create a temporary tree. (vLocation, flDuration).
 */
declare function CreateTempTree(arg1: Vector, arg2: number): void;
/**
 * CreateTrigger( vecMin, vecMax ) : Creates and returns an AABB trigger
 */
declare function CreateTrigger(arg1: Vector, arg2: Vector, arg3: Vector): CBaseTrigger;
/**
 * CreateTriggerRadiusApproximate( vecOrigin, flRadius ) : Creates and returns an AABB trigger thats bigger than the radius provided
 */
declare function CreateTriggerRadiusApproximate(arg1: Vector, arg2: number): CBaseTrigger;
/**
 * Creates a DOTA unit by its dota_npc_units.txt name
 */
declare function CreateUnitByName(unit_name: string, location: Vector, find_clear_space: boolean, npc_owner: CBaseEntity | null | undefined, unit_owner: CDOTA_BaseNPC | null | undefined,
                                  team_number: DOTATeam_t): CDOTA_BaseNPC;
/**
 * Creates a DOTA unit by its dota_npc_units.txt name
 */
declare function CreateUnitByNameAsync(unitName: string, location: Vector, findClearSpace: boolean, npcOwner: CDOTA_BaseNPC | null | undefined, playerOwner: CDOTAPlayer | null | undefined,
                                       team: DOTATeam_t, callback: (unit: CDOTA_BaseNPC) => void): number;
/**
 * Creates a DOTA unit by its dota_npc_units.txt name from a table of entity key values and a position to spawn at.
 */
declare function CreateUnitFromTable(arg1: table, arg2: Vector): CDOTA_BaseNPC;
/**
 * (vector,vector) cross product between two vectors
 */
declare function CrossVectors(arg1: Vector, arg2: Vector): Vector;
/**
 * Spawn a .vmap at the target location.  
 * In addon_game_mode.lua, you can precache resource on `function SpawnGroupPrecache( hSpawnGroup, context )`.
 * @param map NOTE: Don't include `maps/` in path.
 * @param notAutoComplete If false, the map is automatically loaded, otherwise you need to call ManuallyTriggerSpawnGroupCompletion() to complete the loading.
 * @param readyCallback If notAutoComplete is false, it is not called.
 */
declare function DOTA_SpawnMapAtPosition<T>(map: string, origin: Vector, notAutoComplete: boolean, readyCallback: (this:T, groupId: number) => void, completeCallback: (this:T, groupId: number) => void, context: T ): number;
/**
 * Breaks in the debugger
 */
declare function DebugBreak(): void;
/**
 * Creates a test unit controllable by the specified player.
 */
declare function DebugCreateUnit(arg1: object, arg2: string, arg3: number, arg4: boolean, arg5: object): number;
/**
 * Draw a debug overlay box (origin, mins, maxs, forward, r, g, b, a, duration )
 */
declare function DebugDrawBox(arg1: Vector, arg2: Vector, arg3: Vector, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number): void;
/**
 * Draw a debug forward box (cent, min, max, forward, vRgb, a, duration)
 */
declare function DebugDrawBoxDirection(arg1: Vector, arg2: Vector, arg3: Vector, arg4: Vector, arg5: Vector, arg6: number, arg7: number): void;
/**
 * Draw a debug circle (center, vRgb, a, rad, ztest, duration)
 */
declare function DebugDrawCircle(arg1: Vector, arg2: Vector, arg3: number, arg4: number, arg5: boolean, arg6: number): void;
/**
 * Try to clear all the debug overlay info
 */
declare function DebugDrawClear(): void;
/**
 * Draw a debug overlay line (origin, target, r, g, b, ztest, duration)
 */
declare function DebugDrawLine(arg1: Vector, arg2: Vector, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: number): void;
/**
 * Draw a debug line using color vec (start, end, vRgb, a, ztest, duration)
 */
declare function DebugDrawLine_vCol(arg1: Vector, arg2: Vector, arg3: Vector, arg4: boolean, arg5: number): void;
/**
 * Draw text with a line offset (x, y, lineOffset, text, r, g, b, a, duration)
 */
declare function DebugDrawScreenTextLine(arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number): void;
/**
 * Draw a debug sphere (center, vRgb, a, rad, ztest, duration)
 */
declare function DebugDrawSphere(arg1: Vector, arg2: Vector, arg3: number, arg4: number, arg5: boolean, arg6: number): void;
/**
 * Draw text in 3d (origin, text, bViewCheck, duration)
 */
declare function DebugDrawText(arg1: Vector, arg2: string, arg3: boolean, arg4: number): void;
/**
 * Draw pretty debug text (x, y, lineOffset, text, r, g, b, a, duration, font, size, bBold)
 */
declare function DebugScreenTextPretty(arg1: number, arg2: number, arg3: number, arg4: string, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: string, arg11: number,
                                       arg12: boolean): void;
/**
 * Free a damageinfo object that was created with CreateDamageInfo().
 */
declare function DestroyDamageInfo(arg1: table): void;
/**
 * (hAttacker, hTarget, hAbility, fDamage, fRadius, effectName)
 */
declare function DoCleaveAttack(attacker: CDOTA_BaseNPC, target: CDOTA_BaseNPC, ability: CDOTABaseAbility, damage: number, startRadius: number, endRadius: number, distance: number,
                                effectName: string): number;
/**
 * #EntFire:Generate and entity i/o event
 */
declare function DoEntFire(arg1: string, arg2: string, arg3: string, arg4: number, arg5: table, arg6: table): void;
/**
 * #EntFireByHandle:Generate and entity i/o event
 */
declare function DoEntFireByInstanceHandle(arg1: table, arg2: string, arg3: string, arg4: number, arg5: table, arg6: table): void;
/**
 * Execute a script (internal)
 */
declare function DoIncludeScript(arg1: string, arg2: table): boolean;
/**
 * #ScriptAssert:Asserts the passed in value. Prints out a message and brings up the assert dialog.
 */
declare function DoScriptAssert(arg1: boolean, arg2: string): void;
/**
 * #UniqueString:Generate a string guaranteed to be unique across the life of the script VM, with an optional root string. Useful for adding data to tables when not sure what keys are already in use
 * in that table.
 */
declare function DoUniqueString(seed: string): string;
declare function DotProduct(arg1: Vector, arg2: Vector): number;
/**
 * Drop a neutral item for the team of the hero at the given tier.
 */
declare function DropNeutralItemAtPositionForHero(itemName: string, origin: Vector, owner: CDOTA_BaseNPC, team: DOTATeam_t, b: boolean): CDOTA_Item_Physical;
/**
 * Emit an announcer sound for all players.
 */
declare function EmitAnnouncerSound(arg1: string): void;
/**
 * Emit an announcer sound for a player.
 */
declare function EmitAnnouncerSoundForPlayer(arg1: string, arg2: number): void;
/**
 * Emit an announcer sound for a team.
 */
declare function EmitAnnouncerSoundForTeam(arg1: string, arg2: number): void;
/**
 * Emit an announcer sound for a team at a specific location.
 */
declare function EmitAnnouncerSoundForTeamOnLocation(arg1: string, arg2: number, arg3: Vector): void;
/**
 * Play named sound for all players
 */
declare function EmitGlobalSound(arg1: string): void;
/**
 * Play named sound on Entity
 */
declare function EmitSoundOn(soundname: string, entity: CBaseEntity): void;
/**
 * Play named sound only on the client for the passed in player
 */
declare function EmitSoundOnClient(soundname: string, player: CDOTAPlayer): void;
/**
 * Emit a sound on an entity for only a specific player
 */
declare function EmitSoundOnEntityForPlayer(soundname: string, entitiy: CBaseEntity, playerId: PlayerID): void;
/**
 * Emit a sound on a location from a unit, only for players allied with that unit (vLocation, soundName, hCaster
 */
declare function EmitSoundOnLocationForAllies(arg1: Vector, arg2: string, arg3: CDOTAPlayer): void;
/**
 * Emit a sound on a location for only a specific player
 */
declare function EmitSoundOnLocationForPlayer(soundname: string, origin: Vector, playerId: PlayerID): void;
/**
 * Emit a sound on a location from a unit. (vLocation, soundName, hCaster).
 */
declare function EmitSoundOnLocationWithCaster(arg1: Vector, arg2: string, arg3: CDOTA_BaseNPC): void;
/**
 * Turn an entity index integer to an HScript representing that entity's script instance.
 */
declare function EntIndexToHScript(entIndex: number): CBaseEntity;

interface OrderTable {
    UnitIndex: EntityID;
    OrderType: DotaUnitOrder_t;
    TargetIndex?: EntityID;
    AbilityIndex?: EntityID;
    Position?: Vector;
    Queue?: boolean;
}
/**
 * Issue an order from a script table
 */
declare function ExecuteOrderFromTable(order: OrderTable): void;
/**
 * Smooth curve decreasing slower as it approaches zero
 */
declare function ExponentialDecay(arg1: number, arg2: number, arg3: number): number;
/**
 * Finds a clear random position around a given target unit, using the target unit's padded collision radius.
 */
declare function FindClearRandomPositionAroundUnit(arg1: CDOTA_BaseNPC, arg2: CDOTA_BaseNPC, arg3: number): boolean;
/**
 * Place a unit somewhere not already occupied.
 */
declare function FindClearSpaceForUnit(unit: CDOTA_BaseNPC, location: Vector, unknown: boolean): boolean;
/**
 * Find units that intersect the given line with the given flags.
 */
declare function FindUnitsInLine(team: DOTATeam_t, startPos: Vector, endPos: Vector, cacheUnit: CBaseEntity|null, width: number, teamFilter: DOTA_UNIT_TARGET_TEAM, typeFilter: DOTA_UNIT_TARGET_TYPE,
                                 flagFilter: DOTA_UNIT_TARGET_FLAGS): CDOTA_BaseNPC[];
/**
 * Finds the units in a given radius with the given flags.
 */
declare function FindUnitsInRadius(team: DOTATeam_t, location: Vector, cacheUnit: CBaseEntity|null, radius: number, teamFilter: DOTA_UNIT_TARGET_TEAM, typeFilter: DOTA_UNIT_TARGET_TYPE,
                                   flagFilter: DOTA_UNIT_TARGET_FLAGS, order: FindType_t, canGrowCache: boolean): CDOTA_BaseNPC[];
/**
 * Fire Entity's Action Input w/no data
 */
declare function FireEntityIOInputNameOnly(arg1: CBaseEntity, arg2: string): void;
/**
 * Fire Entity's Action Input with passed String - you own the memory
 */
declare function FireEntityIOInputString(arg1: CBaseEntity, arg2: string, arg3: string): void;
/**
 * Fire Entity's Action Input with passed Vector - you own the memory
 */
declare function FireEntityIOInputVec(arg1: CBaseEntity, arg2: string, arg3: Vector): void;
/**
 * Fire a game event.
 */
declare function FireGameEvent(eventName: string, eventData: table): void;
/**
 * Fire a game event without broadcasting to the client.
 */
declare function FireGameEventLocal(eventName: string, eventData: table): void;
/**
 * Get the time spent on the server in the last frame
 */
declare function FrameTime(): number;
/**
 * Gets the ability texture name for an ability
 */
declare function GetAbilityTextureNameForAbility(name: string): string;
/**
 * Returns the currently active spawn group handle.
 */
declare function GetActiveSpawnGroupHandle(): number;
/**
 * [DEPRECATED: Use GetDedicatedServerKeyV2 instead] Get the dedicated server secret based on some version seed.
 */
declare function GetDedicatedServerKey(version: string): string;
/**
 * Get the dedicated server secret based on some version seed.
 */
declare function GetDedicatedServerKeyV2(version: string): string;
/**
 * Get the enity index for a tree id specified as the entindex_target of a DOTA_UNIT_ORDER_CAST_TARGET_TREE.
 */
declare function GetEntityIndexForTreeId(arg1: number): number;
/**
 * Returns the engines current frame count
 */
declare function GetFrameCount(): number;

/**
 * Returns the height of the ground directly below or above the given location. Second parameter is an NPC for measuring movement collision hull offset.
 */
declare function GetGroundHeight(location: Vector, unitHull: CDOTA_BaseNPC | undefined): number;
/**
 * Returns the supplied position moved to the ground. Second parameter is an NPC for measuring movement collision hull offset.
 */
declare function GetGroundPosition(location: Vector, unitHull: CDOTA_BaseNPC | undefined): Vector;
/**
 * Get the cost of an item by name.
 */
declare function GetItemCost(arg1: string): number;
declare function GetItemDefOwnedCount(arg1: number, arg2: number): number;
declare function GetItemDefQuantity(arg1: number, arg2: number): number;
/**
 * Get the local player on a listen server.
 */
declare function GetListenServerHost(): CBasePlayer;
/**
 * Get the name of the map.
 */
declare function GetMapName(): string;
/**
 * Get the longest delay for all events attached to an output
 */
declare function GetMaxOutputDelay(arg1: CBaseEntity, arg2: string): number;
/**
 * Get Angular Velocity for VPHYS or normal object. Returns a vector of the axis of rotation, multiplied by the degrees of rotation per second.
 */
declare function GetPhysAngularVelocity(arg1: CBaseEntity): Vector;
/**
 * Get Velocity for VPHYS or normal object
 */
declare function GetPhysVelocity(arg1: CBaseEntity): Vector;
/**
 * Get the current real world date
 */
declare function GetSystemDate(): string;
/**
 * Get the current real world time
 */
declare function GetSystemTime(): string;
/**
 * Get a target from an AOE location? Details unknown.
 */
declare function GetTargetAOELocation(arg1: number, arg2: number, arg3: number, arg4: Vector, arg5: number, arg6: number, arg7: number): any;
/**
 * Get system time in milliseconds.
 */
declare function GetSystemTimeMS(): number;
/**
 * Get a target from a linear location? Details unknown.
 */
declare function GetTargetLinearLocation(arg1: number, arg2: number, arg3: number, arg4: Vector, arg5: number, arg6: number, arg7: number): any;
/**
 * ( int teamID )
 */
declare function GetTeamHeroKills(team: DOTATeam_t): number;
/**
 * ( int teamID )
 */
declare function GetTeamName(team: DOTATeam_t): string;
/**
 * Given and entity index of a tree, get the tree id for use for use with with unit orders.
 */
declare function GetTreeIdForEntityIndex(arg1: number): number;
/**
 * Gets the world's maximum X position.
 */
declare function GetWorldMaxX(): number;
/**
 * Gets the world's maximum Y position.
 */
declare function GetWorldMaxY(): number;
/**
 * Gets the world's minimum X position.
 */
declare function GetWorldMinX(): number;
/**
 * Gets the world's minimum Y position.
 */
declare function GetWorldMinY(): number;
/**
 * Returns true if this is lua running from the client.dll.
 */
declare function IsClient(): boolean;
/**
 * Returns true if this server is a dedicated server.
 */
declare function IsDedicatedServer(): boolean;
/**
 * Returns true if this is lua running within tools mode.
 */
declare function IsInToolsMode(): boolean;
/**
 * Ask fog of war if a location is visible to a certain team (nTeamNumber, vLocation).
 */
declare function IsLocationVisible(team: DOTATeam_t, location: Vector): boolean;
/**
 * Returns true if the entity is valid and marked for deletion.
 */
declare function IsMarkedForDeletion(arg1: CBaseEntity): boolean;
/**
 * Returns true if this is lua running from the server.dll.
 */
declare function IsServer(): boolean;
/**
 * Returns true if the unit is in a valid position in the gridnav.
 */
declare function IsUnitInValidPosition(unit: CDOTA_BaseNPC): boolean;
/**
 * Checks to see if the given hScript is a valid entity
 */
declare function IsValidEntity(entity: CBaseEntity): boolean;
/**
 * (vector,vector,float) lerp between two vectors by a float factor returning new vector
 */
declare function LerpVectors(arg1: Vector, arg2: Vector, arg3: number): Vector;
/**
 * Set the limit on the pathfinding search space.
 */
declare function LimitPathingSearchDepth(arg1: number): void;
/**
 * Link a lua-defined modifier with the associated class ( className, fileName, LuaModifierType).
 */
declare function LinkLuaModifier(modifierName: string, filePath: string, motionController: LuaModifierType): void;

interface GameEvent {
    [key: string]: any;
}
/**
 * Creates a table from the specified keyvalues text file
 */
declare function LoadKeyValues(filePath: string): table;
/**
 * Creates a table from the specified keyvalues string
 */
declare function LoadKeyValuesFromString(kvString: string): table;
/**
 * Get the current local time
 */
declare function LocalTime(): any;
/**
 * Checks to see if the given hScript is a valid entity
 */
declare function MakeStringToken(arg1: string): number;
/**
 * Start a minimap event. (nTeamID, hEntity, nXCoord, nYCoord, nEventType, nEventDuration).
 */
declare function MinimapEvent(team: DOTATeam_t, entity: CBaseEntity, xCoord: number, yCoord: number, eventType: DOTAMinimapEvent_t, duration: number): void;
/**
 * Pause or unpause the game.
 */
declare function PauseGame(paused: boolean): void;
/**
 * Get a script instance of a player by index.
 */
declare function PlayerInstanceFromIndex(arg1: number): CDOTAPlayer;
/**
 * Precache an entity from KeyValues in table
 */
declare function PrecacheEntityFromTable(arg1: string, arg2: table, callback: (entity: CBaseEntity) => void): void;
/**
 * Precache a list of entity KeyValues tables
 */
declare function PrecacheEntityListFromTable(arg1: table, callback: (entity: CBaseEntity) => void): void;
/**
 * Asynchronously precaches a DOTA item by its dota_npc_items.txt name, provides a callback when it's finished.
 */
declare function PrecacheItemByNameAsync(itemName: string, callback: (id: number) => void): void;
/**
 * Precaches a DOTA item by its dota_npc_items.txt name
 */
declare function PrecacheItemByNameSync(itemName: string, context: CScriptPrecacheContext): void;
/**
 * ( modelName, context ) - Manually precache a single model
 */
declare function PrecacheModel(arg1: string, context: CScriptPrecacheContext): void;
/**
 * Manually precache a single resource
 */
declare function PrecacheResource(arg1: string, arg2: string, context: CScriptPrecacheContext): void;
/**
 * Asynchronously precaches a DOTA unit by its dota_npc_units.txt name, provides a callback when it's finished.
 */
declare function PrecacheUnitByNameAsync(unitName: string, callback: () => void, playerID: PlayerID): void;
/**
 * Precaches a DOTA unit by its dota_npc_units.txt name
 */
declare function PrecacheUnitByNameSync(arg1: string, context: CScriptPrecacheContext, playerOwner?: PlayerID): void;
/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableAsync(arg1: table, callback: () => void): void;
/**
 * Precaches a DOTA unit from a table of entity key values.
 */
declare function PrecacheUnitFromTableSync(arg1: table, context: CScriptPrecacheContext): void;
/**
 * Print a console message with a linked console command
 */
declare function PrintLinkedConsoleMessage(arg1: string, arg2: string): void;
/**
 * Get a random float within a range
 */
declare function RandomFloat(min: number, max: number): number;
/**
 * Get a random int within a range
 */
declare function RandomInt(min: number, max: number): number;
/**
 * Get a random 2D vector of the given length.
 */
declare function RandomVector(length: number): Vector;
/**
 * Register a custom animation script to run when a model loads
 */
declare function RegisterCustomAnimationScriptForModel(arg1: string, arg2: string): void;
/**
 * Create a C proxy for a script-based spawn group filter
 */
declare function RegisterSpawnGroupFilterProxy(arg1: string): void;
/**
 * Reloads the MotD file
 */
declare function ReloadMOTD(): void;
/**
 * Remove the C proxy for a script-based spawn group filter
 */
declare function RemoveSpawnGroupFilterProxy(arg1: string): void;
/**
 * Check and fix units that have been assigned a position inside collision radius of other NPCs.
 */
declare function ResolveNPCPositions(arg1: Vector, arg2: number): void;
/**
 * Rolls a number from 1 to 100 and returns true if the roll is less than or equal to the number specified
 */
declare function RollPercentage(successPercentage: number): boolean;
/**
 * Roll based on a pseudo random chance, see: https://dota2.gamepedia.com/Random_distribution
 */
declare function RollPseudoRandomPercentage(chance: number, randomId: number, unit: CDOTA_BaseNPC): boolean;
/**
 * Rotate a QAngle by another QAngle.
 */
declare function RotateOrientation(arg1: QAngle, arg2: QAngle): QAngle;
/**
 * Rotate a Vector around a point.
 */
declare function RotatePosition(arg1: Vector, arg2: QAngle, arg3: Vector): Vector;
/**
 * (quaternion,vector,float) rotates a quaternion by the specified angle around the specified vector axis
 */
declare function RotateQuaternionByAxisAngle(arg1: Quaternion, arg2: Vector, arg3: number): Quaternion;
/**
 * Find the delta between two QAngles.
 */
declare function RotationDelta(arg1: QAngle, arg2: QAngle): QAngle;
/**
 * converts delta QAngle to an angular velocity Vector
 */
declare function RotationDeltaAsAngularVelocity(arg1: QAngle, arg2: QAngle): Vector;
/**
 * Have Entity say string, and teamOnly or not
 */
declare function Say(entity: CBaseEntity, message: string, teamOnly: boolean): void;
/**
 * Start a screenshake with the following parameters. vecCenter, flAmplitude, flFrequency, flDuration, flRadius, eCommand( SHAKE_START = 0, SHAKE_STOP = 1 ), bAirShake
 */
declare function ScreenShake(center: Vector, amplitude: number, frequency: number, duration: number, radius: number, eCommand: number, airShake: boolean): void;
/**
 * ( DOTAPlayer sendToPlayer, int iMessageType, Entity targetEntity, int iValue, DOTAPlayer sourcePlayer ) - sendToPlayer and sourcePlayer can be nil - iMessageType is one of OVERHEAD_ALERT_*
 */
declare function SendOverheadEventMessage(player: CDOTAPlayer, messageType: number, unit: CDOTA_BaseNPC, value: number, sourcePlayer: CDOTAPlayer): void;
/**
 * Send a string to the console as a client command
 */
declare function SendToConsole(arg1: string): void;
/**
 * Send a string to the console as a server command
 */
declare function SendToServerConsole(arg1: string): void;
/**
 * Sets an opvar value for all players
 */
declare function SetOpvarFloatAll(arg1: string, arg2: string, arg3: string, arg4: number): void;
/**
 * Sets an opvar value for a single player
 */
declare function SetOpvarFloatPlayer(arg1: string, arg2: string, arg3: string, arg4: number, arg5: table): void;
/**
 * Set Angular Velocity for VPHYS or normal object, from a vector of the axis of rotation, multiplied by the degrees of rotation per second.
 */
declare function SetPhysAngularVelocity(arg1: CBaseEntity, arg2: Vector): void;
/**
 * Set the current quest name.
 */
declare function SetQuestName(arg1: string): void;
/**
 * Set the current quest phase.
 */
declare function SetQuestPhase(arg1: number): void;
/**
 * Set rendering on/off for an ehandle
 */
declare function SetRenderingEnabled(arg1: CBaseEntity, arg2: boolean): void;
/**
 * ( teamNumber, r, g, b )
 */
declare function SetTeamCustomHealthbarColor(team: DOTATeam_t, r: number, g: number, b: number): void;
/**
 * ( const char *pszMessage, int nPlayerID, int nValue, float flTime ) - Supports localized strings - %s1 = PlayerName, %s2 = Value, %s3 = TeamName
 */
declare function ShowCustomHeaderMessage(arg1: string, arg2: number, arg3: number, arg4: number): void;
/**
 * Show a generic popup dialog for all players.
 */
declare function ShowGenericPopup(arg1: string, arg2: string, arg3: string, arg4: string, arg5: number): void;
/**
 * Show a generic popup dialog to a specific player.
 */
declare function ShowGenericPopupToPlayer(arg1: table, arg2: string, arg3: string, arg4: string, arg5: string, arg6: number): void;
/**
 * Print a hud message on all clients
 */
declare function ShowMessage(arg1: string): void;
/**
 * Spawn a shop trigger at a location.
 */
declare function SpawnDOTAShopTriggerRadiusApproximate(location: Vector, radius: number): void;
/**
 * Asynchronously spawns a single entity from a table.
 */
declare function SpawnEntityFromTableAsynchronous(baseclass: string, data: table, unknown1: any, callback: () => void): void;
/**
 * Synchronously spawns a single entity from a table
 */
declare function SpawnEntityFromTableSynchronous(baseclass: string, data: table): CBaseEntity;
/**
 * Hierarchically spawn an entity group from a set of spawn tables.
 */
declare function SpawnEntityGroupFromTable(arg1: table, arg2: boolean, arg3: table): boolean;
/**
 * Asynchronously spawn an entity group from a list of spawn tables. A callback will be triggered when the spawning is complete
 */
declare function SpawnEntityListFromTableAsynchronous(arg1: table, callback: () => void): number;
/**
 * Synchronously spawn an entity group from a list of spawn tables.
 */
declare function SpawnEntityListFromTableSynchronous(arg1: table): table;
/**
 * (quaternion,quaternion,float) very basic interpolation of v0 to v1 over t on [0,1]
 */
declare function SplineQuaternions(arg1: Quaternion, arg2: Quaternion, arg3: number): Quaternion;
/**
 * (vector,vector,float) very basic interpolation of v0 to v1 over t on [0,1]
 */
declare function SplineVectors(arg1: Vector, arg2: Vector, arg3: number): Vector;
/**
 * Start a sound event
 */
declare function StartSoundEvent(arg1: string, arg2: CBaseEntity): void;
/**
 * Start a sound event from position
 */
declare function StartSoundEventFromPosition(arg1: string, arg2: Vector): void;
/**
 * Start a sound event from position with reliable delivery
 */
declare function StartSoundEventFromPositionReliable(arg1: string, arg2: Vector): void;
/**
 * Start a sound event from position with optional delivery
 */
declare function StartSoundEventFromPositionUnreliable(arg1: string, arg2: Vector): void;
/**
 * Start a sound event with reliable delivery
 */
declare function StartSoundEventReliable(arg1: string, arg2: CBaseEntity): void;
/**
 * Start a sound event with optional delivery
 */
declare function StartSoundEventUnreliable(arg1: string, arg2: CBaseEntity): void;
/**
 * Pass entity and effect name
 */
declare function StopEffect(arg1: CBaseEntity, arg2: string): void;
/**
 * Stop listening to all game events within a specific context.
 */
declare function StopListeningToAllGameEvents(arg1: object): void;
/**
 * Stop listening to a particular game event.
 */
declare function StopListeningToGameEvent(arg1: number): boolean;
/**
 * Stops a sound event
 */
declare function StopSoundEvent(arg1: string, arg2: CBaseEntity): void;
/**
 * Stop named sound on Entity
 */
declare function StopSoundOn(arg1: string, arg2: CBaseEntity): void;
/**
 * Get the current server time
 */
declare function Time(): number;
/**
 * Pass table - Inputs: start, end, ent, (optional mins, maxs) -- outputs: pos, fraction, hit, startsolid, normal
 */
declare function TraceCollideable(arg1: table): boolean;
/**
 * Pass table - Inputs: start, end, min, max, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid
 */
declare function TraceHull(arg1: table): boolean;
/**
 * Pass table - Inputs: startpos, endpos, mask, ignore  -- outputs: pos, fraction, hit, enthit, startsolid
 */
declare function TraceLine(arg1: table): boolean;
/**
 * Returns the number of degrees difference between two yaw angles
 */
declare function UTIL_AngleDiff(arg1: number, arg2: number): number;
/**
 * Sends colored text to one client.
 */
declare function UTIL_MessageText(arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
/**
 * Sends colored text to all clients.
 */
declare function UTIL_MessageTextAll(arg1: string, arg2: number, arg3: number, arg4: number, arg5: number): void;
/**
 * Sends colored text to all clients. (Valid context keys: player_id, value, team_id)
 */
declare function UTIL_MessageTextAll_WithContext(arg1: string, arg2: number, arg3: number, arg4: number, arg5: number, arg6: table): void;
/**
 * Sends colored text to one client. (Valid context keys: player_id, value, team_id)
 */
declare function UTIL_MessageText_WithContext(arg1: number, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number, arg7: table): void;
/**
 * Removes the specified entity
 */
declare function UTIL_Remove(hEntity: CBaseEntity): void;
/**
 * Immediately removes the specified entity
 */
declare function UTIL_RemoveImmediate(hEntity: CBaseEntity): void;
/**
 * Clear all message text on one client.
 */
declare function UTIL_ResetMessageText(arg1: number): void;
/**
 * Clear all message text from all clients.
 */
declare function UTIL_ResetMessageTextAll(): void;
/**
 * Check if a unit passes a set of filters. (hNPC, nTargetTeam, nTargetType, nTargetFlags, nTeam
 */
declare function UnitFilter(unit: CDOTA_BaseNPC, targetTeam: DOTA_UNIT_TARGET_TEAM, targetType: DOTA_UNIT_TARGET_TYPE,
                            targetFlags: DOTA_UNIT_TARGET_FLAGS, team: DOTATeam_t): boolean;
/**
 * Unload a spawn group by name
 */
declare function UnloadSpawnGroup(arg1: string): void;
/**
 * Unload a spawn group by handle
 */
declare function UnloadSpawnGroupByHandle(groupId: number): void;
declare function VectorAngles(arg1: Vector): QAngle;
/**
 * Get Qangles (with no roll) for a Vector.
 */
declare function VectorToAngles(arg1: Vector): QAngle;
/**
 * Gets the value of the given cvar, as a float.
 */
declare function cvar_getf(arg1: string): number;
/**
 * Sets the value of the given cvar, as a float.
 */
declare function cvar_setf(arg1: string, arg2: number): boolean;
/**
 * Add a rule to the decision database.
 */
declare function rr_AddDecisionRule(arg1: table): boolean;
/**
 * Commit the result of QueryBestResponse back to the given entity to play. Call with params (entity, airesponse)
 */
declare function rr_CommitAIResponse(arg1: table, arg2: table): boolean;
/**
 * Retrieve a table of all available expresser targets, in the form { name : handle, name: handle }.
 */
declare function rr_GetResponseTargets(): table;
/**
 * Params: (entity, query) : tests 'query' against entity's response system and returns the best response found (or null if none found).
 */
declare function rr_QueryBestResponse(arg1: table, arg2: table, arg3: table): boolean;

type OnlyFunctions<T> = Pick<T, {[P in keyof T]: T[P] extends Function ? P : never}[keyof T]>;

/** Delayed lookup and execution of a function on an object. */
declare function Dynamic_Wrap<T, K extends keyof OnlyFunctions<T>>(object: T, name: K): T[K];
