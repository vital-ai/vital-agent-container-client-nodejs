import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#BaseProfile
 */
export class BaseProfile extends VITAL_Node {
  public userID?: string;
  public username?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#BaseProfile';
  }

  /**
   * Get property definitions for BaseProfile
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasUserID',
        tsPropertyName: 'userID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasUsername',
        tsPropertyName: 'username',
        type: 'string',
        required: false
      }
    ];
  }


}
