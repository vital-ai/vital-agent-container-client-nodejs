import { DialogPart } from './dialogPart';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogAction
 */
export class DialogAction extends DialogPart {
  public debugMessageAfter?: string;
  public debugMessageBefore?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogAction';
  }

  /**
   * Get property definitions for DialogAction
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDebugMessageAfter',
        tsPropertyName: 'debugMessageAfter',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasDebugMessageBefore',
        tsPropertyName: 'debugMessageBefore',
        type: 'string',
        required: false
      }
    ];
  }


}
