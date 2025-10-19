import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogRemoveFact
 */
export class DialogRemoveFact extends DialogAction {
  public factScope?: string;
  public removeWholeProfile?: boolean;
  public propertyName?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogRemoveFact';
  }

  /**
   * Get property definitions for DialogRemoveFact
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasFactScope',
        tsPropertyName: 'factScope',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#isRemoveWholeProfile',
        tsPropertyName: 'removeWholeProfile',
        type: 'boolean',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasPropertyName',
        tsPropertyName: 'propertyName',
        type: 'string',
        required: false
      }
    ];
  }


}
