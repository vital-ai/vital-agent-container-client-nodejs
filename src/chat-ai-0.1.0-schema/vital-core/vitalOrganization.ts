import { VITAL_Node } from './vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#VitalOrganization
 */
export class VitalOrganization extends VITAL_Node {
  public organizationID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#VitalOrganization';
  }

  /**
   * Get property definitions for VitalOrganization
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-core#hasOrganizationID',
        tsPropertyName: 'organizationID',
        type: 'string',
        required: false
      }
    ];
  }


}
