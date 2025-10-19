import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#SingleSignOnProvider
 */
export class SingleSignOnProvider extends VITAL_Node {
  public singleSignOnProviderIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#SingleSignOnProvider';
  }

  /**
   * Get property definitions for SingleSignOnProvider
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasSingleSignOnProviderIdentifier',
        tsPropertyName: 'singleSignOnProviderIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
