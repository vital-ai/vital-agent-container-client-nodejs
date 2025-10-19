import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#LoginDataEvent
 */
export class LoginDataEvent extends VITAL_Node {
  declare public loginURI?: string;
  public eventType?: string;
  public entityURI?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#LoginDataEvent';
  }

  /**
   * Get property definitions for LoginDataEvent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital#hasLoginURI',
        tsPropertyName: 'loginURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEventType',
        tsPropertyName: 'eventType',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEntityURI',
        tsPropertyName: 'entityURI',
        type: 'string',
        required: false,
        format: 'uri'
      }
    ];
  }


}
