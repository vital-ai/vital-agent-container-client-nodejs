import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley#HaleyAccountOrganization
 */
export class HaleyAccountOrganization extends VITAL_Node {
  public accountOrganizationExternalIdentifier?: string;
  public accountOrganizationIdentifier?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley#HaleyAccountOrganization';
  }

  /**
   * Get property definitions for HaleyAccountOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOrganizationExternalIdentifier',
        tsPropertyName: 'accountOrganizationExternalIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley#hasAccountOrganizationIdentifier',
        tsPropertyName: 'accountOrganizationIdentifier',
        type: 'string',
        required: false
      }
    ];
  }


}
