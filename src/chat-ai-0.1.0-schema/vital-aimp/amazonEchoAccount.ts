import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#AmazonEchoAccount
 */
export class AmazonEchoAccount extends VITAL_Node {
  public echoUserID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#AmazonEchoAccount';
  }

  /**
   * Get property definitions for AmazonEchoAccount
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasEchoUserID',
        tsPropertyName: 'echoUserID',
        type: 'string',
        required: false
      }
    ];
  }


}
