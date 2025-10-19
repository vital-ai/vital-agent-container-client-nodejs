import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogLoop
 */
export class DialogLoop extends DialogAction {
  public targetStep?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogLoop';
  }

  /**
   * Get property definitions for DialogLoop
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasTargetStep',
        tsPropertyName: 'targetStep',
        type: 'string',
        required: false
      }
    ];
  }


}
