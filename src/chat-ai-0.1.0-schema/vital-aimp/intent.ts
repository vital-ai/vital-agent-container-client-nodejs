import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Intent
 */
export class Intent extends VITAL_Node {
  public intent?: string;
  public parseString?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Intent';
  }

  /**
   * Get property definitions for Intent
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasIntent',
        tsPropertyName: 'intent',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasParseString',
        tsPropertyName: 'parseString',
        type: 'string',
        required: false
      }
    ];
  }


}
