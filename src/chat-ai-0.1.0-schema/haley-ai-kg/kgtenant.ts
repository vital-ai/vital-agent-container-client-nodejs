import { VITAL_Node } from '../vital-core/vitalNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#KGTenant
 */
export class KGTenant extends VITAL_Node {
  public kGTenantIdentifier?: string;
  public kGTenantAccountID?: string;
  public kGTenantAccountURI?: string;
  public kGGlobalTenant?: boolean;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#KGTenant';
  }

  /**
   * Get property definitions for KGTenant
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantIdentifier',
        tsPropertyName: 'kGTenantIdentifier',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountID',
        tsPropertyName: 'kGTenantAccountID',
        type: 'string',
        required: false
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#hasKGTenantAccountURI',
        tsPropertyName: 'kGTenantAccountURI',
        type: 'string',
        required: false,
        format: 'uri'
      },
      {
        propertyURI: 'http://vital.ai/ontology/haley-ai-kg#isKGGlobalTenant',
        tsPropertyName: 'kGGlobalTenant',
        type: 'boolean',
        required: false
      }
    ];
  }


}
