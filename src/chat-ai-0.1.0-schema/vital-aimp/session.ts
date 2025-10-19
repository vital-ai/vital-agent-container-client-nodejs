import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Session
 */
export class Session extends VITAL_Node {
  public authSessionID?: string;
  public userID?: string;
  public lastLeftAppMessageTime?: number;
  public sessionID?: string;
  public chatMode?: string;
  public botID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Session';
  }

  /**
   * Get property definitions for Session
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasAuthSessionID',
        tsPropertyName: 'authSessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUserID',
        tsPropertyName: 'userID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasLastLeftAppMessageTime',
        tsPropertyName: 'lastLeftAppMessageTime',
        type: 'number',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasSessionID',
        tsPropertyName: 'sessionID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasChatMode',
        tsPropertyName: 'chatMode',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasBotID',
        tsPropertyName: 'botID',
        type: 'string',
        required: false
      }
    ];
  }


}
